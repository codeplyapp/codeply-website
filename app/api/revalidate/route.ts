import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// ── GET: For manual testing or simple ping ─────────────────
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");
  const slug = searchParams.get("slug");

  const expectedSecret = process.env.NOTION_WEBHOOK_SECRET || process.env.REVALIDATE_SECRET || "codeply_secret_123";

  if (secret !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
  }

  try {
    if (slug) {
      revalidatePath(`/produk/${slug}`);
    }
    if (path) {
      revalidatePath(path);
    }

    // Always revalidate primary catalog routes
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

// ── POST: For Notion Official Webhooks / Make / Zapier ─────
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const expectedSecret = process.env.NOTION_WEBHOOK_SECRET || process.env.REVALIDATE_SECRET || "codeply_secret_123";

  let body: any = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  // 1. Notion Webhook Verification Challenge Handling
  // Notion sends { "verification_challenge": "..." } when registering the webhook URL
  if (body.verification_challenge) {
    return NextResponse.json({
      verification_challenge: body.verification_challenge,
    });
  }
  if (body.challenge) {
    return NextResponse.json({
      challenge: body.challenge,
    });
  }

  // 2. Secret verification (query param or header)
  const headerSecret = request.headers.get("x-webhook-secret") || request.headers.get("x-notion-signature");
  if (secret !== expectedSecret && headerSecret !== expectedSecret && process.env.NODE_ENV === "production") {
    return NextResponse.json({ message: "Unauthorized webhook payload" }, { status: 401 });
  }

  // 3. Revalidate paths
  try {
    revalidatePath("/", "layout");
    revalidatePath("/produk", "page");
    revalidatePath("/produk/[slug]", "page");

    return NextResponse.json({
      revalidated: true,
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
