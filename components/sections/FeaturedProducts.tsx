"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Package } from "lucide-react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";

interface FeaturedProductsSectionProps {
  products: Product[];
}

export default function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
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
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-8">
            <Package size={44} className="mx-auto mb-3 text-[var(--text-muted)] opacity-60" />
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              Belum Ada Produk Unggulan
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
              Produk yang kamu tambahkan di Notion database akan otomatis muncul di sini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
