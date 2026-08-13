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
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 bg-[#0a0a0a]">
      <GrainGradientClient
        colorBack="#000000"
        colors={['#7300ff', '#eba8ff', '#00bfff', '#2a00ff']}
        speed={1}
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      />
      
      <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto z-10 relative">
        <h1 
          role="heading" 
          className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          {title}
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mx-auto mb-10 leading-relaxed font-medium">
          {subtitle}
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Button 
            onClick={handleClick}
            size="lg"
            className="text-base sm:text-lg px-8 py-3.5 bg-white text-black hover:bg-gray-100 font-bold rounded-xl cursor-pointer shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>{ctaLabel}</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
