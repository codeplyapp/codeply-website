import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft, CheckCircle, Code, ShieldCheck } from "lucide-react";
import { getProductBySlug } from "@/lib/notion";
import { formatRupiah } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: "Produk Tidak Ditemukan — Codeply" };

  return {
    title: `${product.title} — Codeply`,
    description: product.description || `Source code ${product.title} oleh Codeply.`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/produk"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Etalase</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info (Left Column - 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Thumbnail / Image Preview */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[var(--color-bone-200)] border border-[var(--border-color)] flex items-center justify-center">
              {product.thumbnail ? (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[var(--text-muted)] p-8 text-center">
                  <Code size={48} className="mb-3 text-[var(--brand-primary)] opacity-70" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    Source Code Preview
                  </span>
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div>
              {product.category && (
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-[var(--color-celadon-100)] text-[var(--color-celadon-800)] mb-3">
                  {product.category}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
                {product.title}
              </h1>
              {product.description && (
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              )}
            </div>

            {/* Tech Stack */}
            {product.techStack && product.techStack.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Teknologi yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-4">
                  Fitur Utama & Keunggulan
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <CheckCircle
                        size={18}
                        className="text-[var(--brand-primary)] shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Checkout Card (Right Column - 5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl space-y-6">
              <div>
                <span className="text-xs text-[var(--text-muted)] block mb-1">Harga Spesial</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[var(--brand-primary)]">
                    {formatRupiah(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-sm text-[var(--text-muted)] line-through">
                      {formatRupiah(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Lynk.id CTA Button */}
              {product.lynkIdUrl ? (
                <a
                  href={product.lynkIdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Beli Langsung di Lynk.id</span>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <a
                  href="https://lynk.id/codeply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <span>Beli via Lynk.id</span>
                  <ExternalLink size={18} />
                </a>
              )}

              {/* Guarantee list */}
              <div className="pt-4 border-t border-[var(--border-color)] space-y-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-[var(--brand-primary)]" />
                  <span>Akses download instan setelah pembayaran</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-[var(--brand-primary)]" />
                  <span>Pembayaran aman didukung Lynk.id</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
