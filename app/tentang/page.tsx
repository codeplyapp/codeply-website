import type { Metadata } from "next";
import { Code2, Terminal, ExternalLink } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Tentang Saya — Codeply",
  description:
    "Mengenal Codeply, seorang Vibe Coder yang menjual source code sederhana & fungsional untuk pemula di Indonesia.",
};

const skills = [
  { name: "HTML / CSS / Tailwind CSS", level: "Expert" },
  { name: "JavaScript / TypeScript", level: "Advanced" },
  { name: "React / Next.js", level: "Advanced" },
  { name: "Node.js / Express / REST API", level: "Intermediate" },
  { name: "PHP / Laravel", level: "Intermediate" },
  { name: "Git / GitHub / Vercel", level: "Advanced" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#4da0b3] to-[#609f65] p-1 shrink-0 shadow-xl">
            <div className="w-full h-full rounded-[22px] bg-[#0f2024] flex items-center justify-center">
              <Code2 size={56} className="text-[#4da0b3]" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#edf5f7] mb-3">
              Halo, Saya <span className="gradient-text">Codeply</span> 👋
            </h1>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
              Seorang developer dan vibe coder yang fokus membuat source code sederhana, bersih, dan langsung bisa dipakai untuk membantu pemula memahami dunia pemrograman web.
            </p>
          </div>
        </div>

        {/* Story / Mission */}
        <div className="p-8 rounded-2xl bg-[#0f2024] border border-[var(--border-color)] space-y-4">
          <h2 className="text-xl font-bold text-[#edf5f7] flex items-center gap-2">
            <Terminal size={20} className="text-[#4da0b3]" />
            <span>Filosofi & Misi</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Banyak pemula merasa kesulitan saat pertama kali belajar koding karena tutorial seringkali terlalu abstrak atau kompleks. Melalui proyek ini, saya menyediakan template dan source code yang <strong className="text-[#edf5f7]">langsung jalan</strong>, <strong className="text-[#edf5f7]">rapi</strong>, serta <strong className="text-[#edf5f7]">mudah dipelajari</strong>.
          </p>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Semua transaksi pembelian source code dilakukan dengan cepat dan otomatis melalui platform <strong className="text-[#edf5f7]">Lynk.id</strong>.
          </p>
        </div>

        {/* Tech Skills */}
        <div>
          <h2 className="text-xl font-bold text-[#edf5f7] mb-6">
            Teknologi & Keahlian
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#0f2024] border border-[var(--border-color)] flex items-center justify-between"
              >
                <span className="font-semibold text-sm text-[#edf5f7]">
                  {skill.name}
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1f4047]/70 text-[#b8d9e0] border border-[#70b3c2]/30">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Store */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0b1619] via-[#0f2024]/90 to-[#1f4047]/80 border border-[#4da0b3]/40 text-[#edf5f7] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-bold text-lg mb-1">Mari Terhubung & Berdiskusi</h3>
            <p className="text-xs sm:text-sm text-[#b8d9e0]">
              Kunjungi sosial media atau profil toko saya di Lynk.id.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://lynk.id/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#edf5f7] text-[#0b1619] text-xs font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-lg"
            >
              <span>Lynk.id Store</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#edf5f7] transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://instagram.com/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#edf5f7] transition-colors"
              title="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
