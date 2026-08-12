"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Package } from "lucide-react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";

interface ProductCatalogProps {
  initialProducts: Product[];
}

const fallbackProducts: Product[] = [
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
  {
    id: "demo-4",
    slug: "flutter-ecommerce-ui-kit",
    title: "Flutter E-Commerce Mobile UI Kit",
    description:
      "Kumpulan screen UI aplikasi mobile e-commerce siap integrasi backend.",
    price: 59000,
    originalPrice: 89000,
    techStack: ["Flutter", "Dart"],
    category: "Mobile",
    thumbnail: "",
    lynkIdUrl: "https://lynk.id/codeply",
    featured: false,
    published: true,
  },
];

export default function ProductCatalog({ initialProducts }: ProductCatalogProps) {
  const products = initialProducts.length > 0 ? initialProducts : fallbackProducts;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["Semua", ...Array.from(set)];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Semua" || product.category === selectedCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Controls: Search & Category Filter */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />
          <input
            type="text"
            placeholder="Cari source code, fitur, atau teknologi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors placeholder:text-[var(--text-muted)]"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <SlidersHorizontal size={16} className="text-[var(--text-muted)] shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-[var(--brand-primary)] text-white"
                  : "bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 0.08}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8">
          <Package size={48} className="mx-auto mb-4 text-[var(--text-muted)] opacity-60" />
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
            Produk tidak ditemukan
          </h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
            Coba ubah kata kunci pencarian atau pilih kategori lain.
          </p>
        </div>
      )}
    </div>
  );
}
