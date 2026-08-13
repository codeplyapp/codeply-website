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
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#83495c]"
          />
          <input
            type="text"
            placeholder="Cari source code, fitur, atau teknologi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#e6b2c1] text-sm text-[#1b090e] focus:outline-none focus:border-[#c13e63] transition-colors placeholder:text-[#b67c8f] shadow-sm"
          />
        </div>

        {/* Category Filter Pills */}
        {categories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <SlidersHorizontal size={16} className="text-[#83495c] shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#c13e63] text-white border border-[#c13e63] shadow-md"
                    : "bg-white border border-[#e6b2c1] text-[#74253c] hover:text-[#1b090e] hover:border-[#c13e63]/50"
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
        <div className="py-20 text-center rounded-2xl bg-white border border-[#e6b2c1] p-8 shadow-sm">
          <Package size={48} className="mx-auto mb-4 text-[#c13e63] opacity-60" />
          <h3 className="text-lg font-bold text-[#1b090e] mb-2">
            {products.length === 0 ? "Belum Ada Produk di Database" : "Produk Tidak Ditemukan"}
          </h3>
          <p className="text-sm text-[#623745] max-w-sm mx-auto">
            {products.length === 0
              ? "Produk yang kamu masukkan di Notion database akan otomatis muncul di etalase ini."
              : "Coba ubah kata kunci pencarian atau pilih kategori lain."}
          </p>
        </div>
      )}
    </div>
  );
}
