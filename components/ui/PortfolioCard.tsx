"use client";

import Image from "next/image";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { PortfolioItem } from "@/types/product";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const { title, description, techStack, category, thumbnail, liveUrl, githubUrl } = item;

  return (
    <div className="rounded-2xl bg-[#0f2024] border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:border-[#4da0b3] hover:shadow-[0_10px_30px_rgba(77,160,179,0.3)] flex flex-col justify-between">
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#1f4047] flex items-center justify-center">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-[var(--text-muted)] p-6">
              <Folder size={40} className="mb-2 text-[#4da0b3] opacity-70" />
              <span className="text-xs font-medium text-[#70b3c2]">Portfolio Project</span>
            </div>
          )}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#39603d] text-[#edf5f7] backdrop-blur-md shadow-md border border-[#80b384]/40">
              {category}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#1f4047]/60 text-[#b8d9e0] border border-[#70b3c2]/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="font-bold text-xl text-[#edf5f7] mb-2">{title}</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Action Links */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#4da0b3] hover:bg-[#70b3c2] text-[#0b1619] text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-[var(--border-color)] hover:bg-[#1f4047] text-[#edf5f7] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <GithubIcon size={15} />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
}
