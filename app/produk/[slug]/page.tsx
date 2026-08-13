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
          className="inline-flex items-center gap-2 text-sm text-[#74253c] hover:text-[#c13e63] transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Etalase</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info (Left Column - 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Thumbnail / Image Preview */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#f3d8e0]/60 border border-[#e6b2c1] flex items-center justify-center shadow-sm">
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
                <div className="flex flex-col items-center justify-center text-[#83495c] p-8 text-center">
                  <Code size={48} className="mb-3 text-[#c13e63] opacity-70" />
                  <span className="text-sm font-semibold text-[#74253c]">
                    Source Code Preview
                  </span>
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div>
              {product.category && (
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-[#ab5491] text-white shadow-sm mb-3">
                  {product.category}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b090e] mb-3 leading-snug">
                {product.title}
              </h1>
              {product.description && (
                <p className="text-sm sm:text-base text-[#623745] leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              )}
            </div>

            {/* Tech Stack */}
            {product.techStack && product.techStack.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#83495c] mb-3">
                  Teknologi yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-white border border-[#e6b2c1] text-[#74253c] shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features Highlight */}
            <div className="p-6 rounded-2xl bg-white border border-[#e6b2c1] shadow-sm">
              <h3 className="font-bold text-base text-[#1b090e] mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-[#c13e63]" />
                <span>Apa yang Kamu Dapatkan?</span>
              </h3>
              <ul className="space-y-3 text-sm text-[#623745]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c13e63] mt-2 shrink-0" />
                  <span>Source code lengkap dan terorganisir dengan struktur yang rapi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c13e63] mt-2 shrink-0" />
                  <span>Petunjuk instalasi & dokumentasi singkat penggunaan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c13e63] mt-2 shrink-0" />
                  <span>Bebas dimodifikasi untuk projek pribadi maupun komersial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c13e63] mt-2 shrink-0" />
                  <span>Akses pengunduhan file instan via Lynk.id setelah pembayaran</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky Checkout Box (Right Column - 5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 rounded-2xl bg-white border border-[#e6b2c1] space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-medium text-[#83495c] block mb-1">
                  Harga Sumber Kode
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#c13e63]">
                    {formatRupiah(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-sm text-[#83495c] line-through">
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
                  className="w-full py-3.5 px-6 rounded-xl bg-[#c13e63] hover:bg-[#9a324f] text-white font-bold text-base flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Beli via Lynk.id</span>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-3.5 px-6 rounded-xl bg-[#f3d8e0] text-[#cd6582] font-bold text-base cursor-not-allowed"
                >
                  Tautan Pembelian Belum Tersedia
                </button>
              )}

              {/* Guarantees */}
              <div className="pt-4 border-t border-[#e6b2c1]/60 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#74253c]">
                  <ShieldCheck size={16} className="text-[#c13e63] shrink-0" />
                  <span>Pembayaran Aman & Terverifikasi via Lynk.id</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#74253c]">
                  <CheckCircle size={16} className="text-[#c13e63] shrink-0" />
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
