"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Code2 } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 font-bold text-2xl text-[#1b090e] ${className}`}>
      {!imageError ? (
        <div className="relative shrink-0 overflow-hidden rounded-xl flex items-center justify-center" style={{ width: size, height: size }}>
          <Image
            src="/logo.png"
            alt="Codeply Logo"
            width={size}
            height={size}
            className="object-contain w-full h-full"
            onError={() => setImageError(true)}
            priority
          />
        </div>
      ) : (
        <div
          className="rounded-xl bg-[#c13e63] flex items-center justify-center shadow-lg shadow-[#c13e63]/30 shrink-0 text-white"
          style={{ width: size, height: size }}
        >
          <Code2 size={Math.round(size * 0.55)} />
        </div>
      )}

      {showText && (
        <span className="font-heading tracking-tight">
          code<span className="text-[#c13e63]">ply</span>
        </span>
      )}
    </Link>
  );
}
