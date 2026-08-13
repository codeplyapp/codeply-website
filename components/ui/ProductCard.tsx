"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Code } from "lucide-react";
import type { Product } from "@/types/product";
import { formatRupiah } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    slug,
    title,
    description,
    price,
    originalPrice,
    techStack,
    category,
    thumbnail,
    lynkIdUrl,
  } = product;

  return (
    <div className="group rounded-2xl bg-[#12111c] border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:border-[#AD7BE9] hover:shadow-[0_10px_30px_rgba(77,45,183,0.3)] flex flex-col justify-between">
      <div>
        {/* Thumbnail Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#1a1829] flex items-center justify-center">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-[var(--text-muted)] p-6 text-center">
              <Code size={40} className="mb-2 text-[#AD7BE9] opacity-70" />
              <span className="text-xs font-medium text-[#9f96c2]">Source Code Preview</span>
            </div>
          )}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#4D2DB7] text-white backdrop-blur-md shadow-md border border-[#AD7BE9]/30">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Tech Stack Badges */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#1a1829] text-[#dcd6f7] border border-[#AD7BE9]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="font-bold text-lg text-white group-hover:text-[#AD7BE9] transition-colors line-clamp-1 mb-2">
            <Link href={`/produk/${slug || product.id}`}>{title}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer / Price & Action */}
      <div className="p-5 pt-0 border-t border-[var(--border-color)]/60 mt-auto flex items-center justify-between gap-3 pt-4">
        <div>
          <span className="text-xs text-[var(--text-muted)] block">Harga</span>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg text-[#AD7BE9]">
              {formatRupiah(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-xs text-[var(--text-muted)] line-through">
                {formatRupiah(originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/produk/${slug || product.id}`}
            className="p-2.5 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white hover:bg-[#1a1829] transition-colors"
            title="Detail Produk"
          >
            <ArrowRight size={16} />
          </Link>
          {lynkIdUrl && (
            <a
              href={lynkIdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-[#4D2DB7] hover:bg-[#5e3ce8] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md hover:scale-105"
            >
              <span>Beli</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
