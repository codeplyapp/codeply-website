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
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#4da0b3] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Etalase</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info (Left Column - 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Thumbnail / Image Preview */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#1f4047] border border-[var(--border-color)] flex items-center justify-center">
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
                  <Code size={48} className="mb-3 text-[#4da0b3] opacity-70" />
                  <span className="text-sm font-semibold text-[#b8d9e0]">
                    Source Code Preview
                  </span>
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div>
              {product.category && (
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-[#39603d] text-[#edf5f7] border border-[#80b384]/40 mb-3">
                  {product.category}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#edf5f7] mb-3 leading-snug">
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
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#1f4047] border border-[#70b3c2]/30 text-[#b8d9e0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features Highlight */}
            <div className="p-6 rounded-2xl bg-[#0f2024] border border-[var(--border-color)]">
              <h3 className="font-bold text-base text-[#edf5f7] mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-[#4da0b3]" />
                <span>Apa yang Kamu Dapatkan?</span>
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4da0b3] mt-2 shrink-0" />
                  <span>Source code lengkap dan terorganisir dengan struktur yang rapi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4da0b3] mt-2 shrink-0" />
                  <span>Petunjuk instalasi & dokumentasi singkat penggunaan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4da0b3] mt-2 shrink-0" />
                  <span>Bebas dimodifikasi untuk projek pribadi maupun komersial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4da0b3] mt-2 shrink-0" />
                  <span>Akses pengunduhan file instan via Lynk.id setelah pembayaran</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky Checkout Box (Right Column - 5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0f2024] border border-[var(--border-color)] space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-medium text-[var(--text-muted)] block mb-1">
                  Harga Sumber Kode
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#70b3c2]">
                    {formatRupiah(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-sm text-[var(--text-muted)] line-through">
                      {formatRupiah(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              {product.lynkIdUrl ? (
                <a
                  href={product.lynkIdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#4da0b3] hover:bg-[#70b3c2] text-[#0b1619] font-bold text-base flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Beli via Lynk.id</span>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1f4047] text-[#70b3c2] font-bold text-base cursor-not-allowed"
                >
                  Tautan Pembelian Belum Tersedia
                </button>
              )}

              {/* Guarantees */}
              <div className="pt-4 border-t border-[var(--border-color)]/60 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <ShieldCheck size={16} className="text-[#4da0b3] shrink-0" />
                  <span>Pembayaran Aman & Terverifikasi via Lynk.id</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <CheckCircle size={16} className="text-[#4da0b3] shrink-0" />
                  <span>Pengiriman File Otomatis Langsung Setelah Pembayaran</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
