import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// Global in-memory storage for the latest verification token received from Notion
let lastVerificationToken = "";
let lastPayload: any = null;

// ── GET: For manual trigger & retrieving verification token ─────
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const getToken = searchParams.get("get_token");

  // Endpoint to retrieve the last received verification token for Notion UI verification
  if (getToken === "true" || getToken === "1") {
    return NextResponse.json({
      lastVerificationToken,
      lastPayload,
      help: "Salin 'lastVerificationToken' di atas dan tempel ke input 'Token verifikasi' di Notion UI.",
      timestamp: new Date().toISOString(),
    });
  }

  const expectedSecret = process.env.NOTION_WEBHOOK_SECRET || process.env.REVALIDATE_SECRET || "codeply_revalidate_secret_123";

  if (secret !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
  }

  try {
    revalidatePath("/", "layout");
    revalidatePath("/produk", "page");

    return NextResponse.json({
      revalidated: true,
      message: "Cache successfully purged",
      revalidatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to revalidate", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// ── POST: Handles Notion Webhook Payload & Verification Token ─
export async function POST(request: NextRequest) {
  let body: any = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  console.log("RECEIVED NOTION WEBHOOK PAYLOAD:", JSON.stringify(body));
  lastPayload = body;

  // Extract verification token if Notion is sending one
  const token =
    body.verification_token ||
    body.token ||
    body.verification_challenge ||
    body.challenge ||
    body.secret;

  if (token) {
    lastVerificationToken = String(token);
  }

  // 1. Notion Webhook Verification Response (Auto-reply for protocols that require JSON challenge reply)
  if (body.verification_challenge || body.challenge) {
    return NextResponse.json({
      verification_challenge: body.verification_challenge || body.challenge,
      verification_token: token,
    });
  }

  // 2. Perform Revalidation
  try {
    revalidatePath("/", "layout");
    revalidatePath("/produk", "page");
    revalidatePath("/produk/[slug]", "page");

    return NextResponse.json({
      revalidated: true,
      receivedToken: token || null,
      event: body.type || "notion_event",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Webhook revalidation failed", error: (error as Error).message },
      { status: 500 }
    );
  }
}
