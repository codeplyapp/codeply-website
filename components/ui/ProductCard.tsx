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
    <div className="group rounded-2xl bg-white border border-[#b8d9e0]/80 overflow-hidden transition-all duration-300 hover:border-[#3d808f] hover:shadow-xl flex flex-col justify-between h-full">
      <div>
        {/* Thumbnail Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#dbecf0]/60 flex items-center justify-center">
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
            <div className="flex flex-col items-center justify-center text-[#4e6d7e] p-6 text-center">
              <Code size={40} className="mb-2 text-[#3d808f] opacity-70" />
              <span className="text-xs font-medium text-[#2e606b]">Source Code Preview</span>
            </div>
          )}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#4d8051] text-white backdrop-blur-md shadow-md">
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
                  className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#edf5f7] text-[#2e606b] border border-[#b8d9e0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="font-bold text-lg text-[#0b1619] group-hover:text-[#3d808f] transition-colors line-clamp-1 mb-2">
            <Link href={`/produk/${slug || product.id}`}>{title}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-[#3a515f] line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer / Price & Action */}
      <div className="p-5 pt-4 border-t border-[#b8d9e0]/60 mt-auto flex items-center justify-between gap-2 overflow-hidden bg-[#eff3f5]/50">
        <div className="min-w-0 flex-1 pr-1">
          <span className="text-[11px] text-[#4e6d7e] block mb-0.5 font-medium">Harga</span>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-bold text-base sm:text-lg text-[#3d808f] whitespace-nowrap">
              {formatRupiah(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-[11px] text-[#4e6d7e] line-through whitespace-nowrap">
                {formatRupiah(originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <Link
            href={`/produk/${slug || product.id}`}
            className="p-2.5 rounded-xl border border-[#b8d9e0] text-[#2e606b] hover:text-[#0b1619] hover:bg-[#dbecf0] transition-colors flex items-center justify-center shrink-0"
            title="Detail Produk"
          >
            <ArrowRight size={16} />
          </Link>
          {lynkIdUrl && (
            <a
              href={lynkIdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-[#3d808f] hover:bg-[#2e606b] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md hover:scale-105 shrink-0 whitespace-nowrap"
            >
              <span>Beli</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
