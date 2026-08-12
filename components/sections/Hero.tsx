"use client";

import Link from "next/link";
import { ArrowRight, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-surface)] to-[var(--bg-primary)]">
      {/* Background Decor Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#dad4be_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-celadon-100)] text-[var(--color-celadon-800)] text-xs font-semibold mb-6 border border-[var(--color-celadon-300)]"
          >
            <Sparkles size={14} className="text-[var(--brand-primary)]" />
            <span>Source Code Simple untuk Pemula & Vibe Coder</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 leading-tight"
          >
            Siap Pakai, Pelajari, &{" "}
            <span className="gradient-text">Kembangkan Projekmu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Kumpulan source code berkualitas tinggi yang dirancang simpel dan rapi. Cocok untuk pemula yang ingin memahami struktur kode modern atau mempercepat pengerjaan projek.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/produk"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Eksplor Etalase</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/portofolio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-semibold text-base hover:bg-[var(--color-bone-200)] transition-all flex items-center justify-center gap-2"
            >
              <Code2 size={18} className="text-[var(--brand-accent)]" />
              <span>Lihat Portofolio</span>
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-[var(--border-color)]/60 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[var(--text-secondary)]"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--brand-primary)]" />
              <span>Transaksi Aman via Lynk.id</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--brand-primary)]" />
              <span>Kode Bersih & Documented</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--brand-primary)]" />
              <span>Siap Langsung Run</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
