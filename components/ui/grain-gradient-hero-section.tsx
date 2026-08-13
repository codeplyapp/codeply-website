"use client";

import { useRouter } from "next/navigation";
import { GrainGradient, grainGradientPresets } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";

interface GrainHeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export default function GrainHeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/produk",
  onCtaClick,
}: GrainHeroSectionProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref) {
      router.push(ctaHref);
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 bg-[#f9ecef]">
      <GrainGradient
        {...grainGradientPresets[0]}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}
      />
      
      <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto z-10 relative">
        <h1 
          role="heading" 
          className="text-4xl sm:text-6xl font-extrabold text-[#1b090e] mb-6 tracking-tight leading-tight"
        >
          {title}
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-[#74253c] mx-auto mb-10 leading-relaxed font-medium">
          {subtitle}
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Button 
            onClick={handleClick}
            size="lg"
            className="text-base sm:text-lg px-8 py-3.5 bg-[#c13e63] hover:bg-[#9a324f] text-white font-bold rounded-xl cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-[#e6b2c1]/40"
          >
            <span>{ctaLabel}</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
