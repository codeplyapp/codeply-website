"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Package } from "lucide-react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";

interface ProductCatalogProps {
  initialProducts: Product[];
}

export default function ProductCatalog({ initialProducts }: ProductCatalogProps) {
  const products = initialProducts || [];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Extract unique categories dynamically from real Notion products
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["Semua", ...Array.from(set)];
  }, [products]);

  // Filter real products
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
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#140033] border border-[var(--border-color)] text-sm text-white focus:outline-none focus:border-[#9400FF] transition-colors placeholder:text-[var(--text-muted)] shadow-inner"
          />
        </div>

        {/* Category Filter Pills */}
        {categories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <SlidersHorizontal size={16} className="text-[var(--text-muted)] shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#9400FF] text-white border border-[#9400FF] shadow-lg"
                    : "bg-[#140033] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white hover:border-[#9400FF]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
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
        <div className="py-20 text-center rounded-2xl bg-[#140033] border border-[var(--border-color)] p-8">
          <Package size={48} className="mx-auto mb-4 text-[#9400FF] opacity-60" />
          <h3 className="text-lg font-bold text-white mb-2">
            {products.length === 0 ? "Belum Ada Produk di Database" : "Produk Tidak Ditemukan"}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
            {products.length === 0
              ? "Produk yang kamu masukkan di Notion database akan otomatis muncul di etalase ini."
              : "Coba ubah kata kunci pencarian atau pilih kategori lain."}
          </p>
        </div>
      )}
    </div>
  );
}
