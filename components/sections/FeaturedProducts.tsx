"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";

interface FeaturedProductsSectionProps {
  products: Product[];
}

// Fallback products when Notion database hasn't been populated yet
const fallbackFeaturedProducts: Product[] = [
  {
    id: "demo-1",
    slug: "landing-page-html-css",
    title: "Landing Page Personal HTML & CSS",
    description:
      "Template landing page responsif, bersih, dan modern. Sangat mudah disesuaikan untuk portofolio atau etalase produk digital.",
    price: 25000,
    originalPrice: 45000,
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "Landing Page",
    thumbnail: "",
    lynkIdUrl: "https://lynk.id/codeply",
    featured: true,
    published: true,
  },
  {
    id: "demo-2",
    slug: "admin-dashboard-tailwind",
    title: "Admin Dashboard Starter Tailwind",
    description:
      "Template dashboard admin simpel dengan chart, tabel data, dan sidebar navigasi yang responsif.",
    price: 49000,
    originalPrice: 75000,
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    category: "Dashboard",
    thumbnail: "",
    lynkIdUrl: "https://lynk.id/codeply",
    featured: true,
    published: true,
  },
  {
    id: "demo-3",
    slug: "rest-api-express-starter",
    title: "REST API Express & Prisma Starter",
    description:
      "Boilerplate backend REST API lengkap dengan otentikasi JWT, middleware error handler, dan ORM Prisma.",
    price: 35000,
    originalPrice: 50000,
    techStack: ["Node.js", "Express", "Prisma"],
    category: "Backend",
    thumbnail: "",
    lynkIdUrl: "https://lynk.id/codeply",
    featured: true,
    published: true,
  },
];

export default function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  const displayProducts = products.length > 0 ? products : fallbackFeaturedProducts;

  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-bone-200)] text-[var(--text-secondary)] text-xs font-semibold mb-3">
              <Sparkles size={14} className="text-[var(--brand-primary)]" />
              <span>Pilihan Terbaik</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[var(--text-primary)]">
              Produk Source Code Unggulan
            </h2>
          </div>

          <Link
            href="/produk"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors group"
          >
            <span>Lihat Semua Produk</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
