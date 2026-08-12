import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[var(--color-celadon-700)] to-[var(--color-muted-teal-700)] p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl">
          {/* Background circles decor */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Punya Pertanyaan atau Custom Request Source Code?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
              Langsung kunjungi profil Lynk.id saya untuk melihat seluruh katalog produk atau hubungi untuk diskusi projek custom.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://lynk.id/codeply"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white text-[var(--color-celadon-900)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-md"
              >
                <span>Buka Lynk.id/codeply</span>
                <ExternalLink size={16} />
              </a>

              <Link
                href="/produk"
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all border border-white/20"
              >
                <span>Lihat Etalase</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
