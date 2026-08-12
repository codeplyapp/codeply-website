import { Client } from "@notionhq/client";
import type { Product } from "@/types/product";
import { slugify } from "@/lib/utils";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "3ba1f2c14b19800cac9fdec8225fb455";

// ── Helpers ──────────────────────────────────────────────

function getText(property: any): string {
  if (!property) return "";
  if (property.type === "title" && Array.isArray(property.title)) {
    return property.title.map((t: any) => t.plain_text).join("") ?? "";
  }
  if (property.type === "rich_text" && Array.isArray(property.rich_text)) {
    return property.rich_text.map((t: any) => t.plain_text).join("") ?? "";
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
  if (property.type === "multi_select" && Array.isArray(property.multi_select)) {
    return property.multi_select.map((s: any) => s.name) ?? [];
  }
  return [];
}

function getSelect(property: any): string {
  if (!property) return "";
  if (property.type === "select") return property.select?.name ?? "";
  return "";
}

function getFiles(property: any): string {
  if (!property) return "";
  if (property.type === "files" && Array.isArray(property.files) && property.files.length > 0) {
    const file = property.files[0];
    if (file.type === "file") return file.file?.url || "";
    if (file.type === "external") return file.external?.url || "";
  }
  return "";
}

// ── Mapper ───────────────────────────────────────────────

function mapNotionToProduct(page: any): Product {
  const props = page.properties || {};

  const title =
    getText(props.Title) ||
    getText(props.Nama) ||
    getText(props.title) ||
    "Untitled Product";

  const rawSlug = getText(props.Slug) || getText(props.slug);
  const slug = rawSlug && rawSlug.trim() ? rawSlug.trim() : slugify(title) || page.id;

  const description = getText(props.Description) || getText(props.Deskripsi);
  const price = getNumber(props.Price) || getNumber(props.Harga);
  const originalPrice = getNumber(props.OriginalPrice) || getNumber(props.HargaAsli);
  const techStack = getMultiSelect(props.TechStack);
  const category = getSelect(props.Category) || getSelect(props.Kategori);
  const thumbnail = getFiles(props.Thumbnail) || getFiles(props.Gambar);
  const lynkIdUrl = getUrl(props.LynkIdUrl) || getUrl(props.LynkUrl);
  const featured = getCheckbox(props.Featured);
  const published = props.Published ? getCheckbox(props.Published) : true;

  return {
    id: page.id,
    slug,
    title,
    description,
    price,
    originalPrice: originalPrice > price ? originalPrice : undefined,
    techStack,
    category,
    thumbnail,
    lynkIdUrl,
    featured,
    published,
    createdAt: page.created_time,
  };
}

// ── Query Engine (Hybrid Search & DataSources) ────────────

async function fetchNotionPages(): Promise<any[]> {
  if (!process.env.NOTION_TOKEN) return [];

  // Strategy 1: Notion Search API (Most reliable across workspace database structures)
  try {
    const searchRes = await notion.search({
      filter: { value: "page", property: "object" },
      sort: { direction: "descending", timestamp: "last_edited_time" },
    });
    if (searchRes.results && searchRes.results.length > 0) {
      return searchRes.results;
    }
  } catch (err) {
    console.warn("Search query notice:", (err as Error).message);
  }

  // Strategy 2: DataSources API with known data_source_id or DATABASE_ID
  try {
    const res = await notion.dataSources.query({
      data_source_id: DATABASE_ID,
    });
    if (res.results) return res.results;
  } catch (err) {
    console.warn("DataSources query notice:", (err as Error).message);
  }

  return [];
}

// ── Public API Methods ────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  const pages = await fetchNotionPages();
  return pages
    .map(mapNotionToProduct)
    .filter((p) => p.published);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  const featured = products.filter((p) => p.featured);
  return featured.length > 0 ? featured : products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  const found = products.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug
  );
  return found || null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}
