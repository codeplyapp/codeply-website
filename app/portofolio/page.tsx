import type { Metadata } from "next";
import PortfolioCard from "@/components/ui/PortfolioCard";
import FadeIn from "@/components/ui/FadeIn";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portofolio — Codeply",
  description:
    "Kumpulan proyek, aplikasi web, dan karya koding buatan Codeply. Lihat keahlian dan hasil pembuatan source code.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3">
              Portofolio & Hasil Karya
            </h1>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
              Kumpulan proyek nyata, eksperimen koding, dan aplikasi web yang telah dibangun sebagai bukti kualitas koding dan desain.
            </p>
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <PortfolioCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
