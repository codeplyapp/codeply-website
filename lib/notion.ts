import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Product } from "@/types/product";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "";

// ── Helpers ──────────────────────────────────────────────

function getText(property: any): string {
  if (!property) return "";
  if (property.type === "title") {
    return property.title?.map((t: any) => t.plain_text).join("") ?? "";
  }
  if (property.type === "rich_text") {
    return property.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
  }
  return "";
}

function getNumber(property: any): number {
  if (!property) return 0;
  if (property.type === "number") return property.number ?? 0;
  return 0;
}

function getUrl(property: any): string {
  if (!property) return "";
  if (property.type === "url") return property.url ?? "";
  return "";
}

function getCheckbox(property: any): boolean {
  if (!property) return false;
  if (property.type === "checkbox") return property.checkbox ?? false;
  return false;
}

function getMultiSelect(property: any): string[] {
  if (!property) return [];
  if (property.type === "multi_select") return property.multi_select?.map((s: any) => s.name) ?? [];
  return [];
}

function getSelect(property: any): string {
  if (!property) return "";
  if (property.type === "select") return property.select?.name ?? "";
  return "";
}

function getFiles(property: any): string {
  if (!property) return "";
  if (property.type === "files" && property.files?.length > 0) {
    const file = property.files[0];
    if (file.type === "file") return file.file.url;
    if (file.type === "external") return file.external.url;
  }
  return "";
}

// ── Mapper ───────────────────────────────────────────────

function mapNotionToProduct(page: any): Product {
  const props = page.properties || {};
  return {
    id: page.id,
    slug: getText(props.Slug) || page.id,
    title: getText(props.Title) || "Untitled Product",
    description: getText(props.Description),
    price: getNumber(props.Price),
    originalPrice: getNumber(props.OriginalPrice) || undefined,
    techStack: getMultiSelect(props.TechStack),
    category: getSelect(props.Category),
    thumbnail: getFiles(props.Thumbnail),
    lynkIdUrl: getUrl(props.LynkIdUrl),
    featured: getCheckbox(props.Featured),
    published: getCheckbox(props.Published),
    createdAt: page.created_time,
  };
}

// Helper to query dataSources using SDK
async function queryNotionData(filter?: any, sorts?: any): Promise<any[]> {
  if (!DATABASE_ID || !process.env.NOTION_TOKEN) return [];
  try {
    const response = await notion.dataSources.query({
      data_source_id: DATABASE_ID,
      filter,
      sorts,
    });
    return response.results || [];
  } catch (error) {
    console.warn("Notion API Query Warning:", (error as Error).message);
    return [];
  }
}

// ── Queries ───────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  const results = await queryNotionData(
    {
      property: "Published",
      checkbox: { equals: true },
    },
    [{ timestamp: "created_time", direction: "descending" }]
  );
  return results.map(mapNotionToProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const results = await queryNotionData({
    and: [
      { property: "Published", checkbox: { equals: true } },
      { property: "Featured", checkbox: { equals: true } },
    ],
  });
  return results.map(mapNotionToProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const results = await queryNotionData({
    and: [
      { property: "Published", checkbox: { equals: true } },
      { property: "Slug", rich_text: { equals: slug } },
    ],
  });
  if (results.length === 0) return null;
  return mapNotionToProduct(results[0]);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const results = await queryNotionData({
    and: [
      { property: "Published", checkbox: { equals: true } },
      { property: "Category", select: { equals: category } },
    ],
  });
  return results.map(mapNotionToProduct);
}
