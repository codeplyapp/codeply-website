"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";

// Dynamically import GrainGradient with SSR disabled to prevent Vercel WebGL build errors
const GrainGradientClient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false }
);

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
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 bg-[#0a0a0f]">
      <GrainGradientClient
        colorBack="#0a0a0f"
        colors={['#9a324f', '#4d8051', '#3d808f', '#c13e63']}
        speed={0.05}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.9 }}
      />
      
      <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto z-10 relative">
        <h1 
          role="heading" 
          className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          {title}
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-[#f9ecef] mx-auto mb-10 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {subtitle}
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Button 
            onClick={handleClick}
            size="lg"
            className="text-base sm:text-lg px-8 py-3.5 bg-[#c13e63] hover:bg-[#9a324f] text-white font-bold rounded-xl cursor-pointer shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-[#e6b2c1]/40"
          >
            <span>{ctaLabel}</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
