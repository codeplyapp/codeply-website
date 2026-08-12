import type { Metadata } from "next";
import ProductCatalog from "@/components/sections/ProductCatalog";
import { getProducts } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Etalase Source Code — Codeply",
  description:
    "Jelajahi etalase source code simple dan berkualitas tinggi untuk pemula. Pembelian mudah dan instan via Lynk.id.",
};

export const revalidate = 3600;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3">
            Etalase Source Code
          </h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            Pilih source code yang kamu butuhkan, klik beli, dan kamu akan langsung diarahkan ke Lynk.id untuk pembayaran instan & cepat.
          </p>
        </div>

        {/* Product Catalog */}
        <ProductCatalog initialProducts={products} />
      </div>
    </div>
  );
}
