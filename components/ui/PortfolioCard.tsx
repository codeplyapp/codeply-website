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
    <div className="rounded-2xl bg-white border border-[#b8d9e0]/80 overflow-hidden transition-all duration-300 hover:border-[#3d808f] hover:shadow-xl flex flex-col justify-between">
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#dbecf0]/60 flex items-center justify-center">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-[#4e6d7e] p-6">
              <Folder size={40} className="mb-2 text-[#3d808f] opacity-70" />
              <span className="text-xs font-medium text-[#2e606b]">Portfolio Project</span>
            </div>
          )}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#4d8051] text-white backdrop-blur-md shadow-md">
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
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#edf5f7] text-[#2e606b] border border-[#b8d9e0]"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="font-bold text-xl text-[#0b1619] mb-2">{title}</h3>
          <p className="text-sm text-[#3a515f] leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Action Links */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#3d808f] hover:bg-[#2e606b] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
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
            className="px-4 py-2.5 rounded-xl border border-[#b8d9e0] hover:bg-[#dbecf0] text-[#0b1619] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <GithubIcon size={15} />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
}
