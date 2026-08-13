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
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#3d808f] to-[#4d8051] p-1 shrink-0 shadow-xl">
            <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center">
              <Code2 size={56} className="text-[#3d808f]" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1619] mb-3">
              Halo, Saya <span className="gradient-text">Codeply</span> 👋
            </h1>
            <p className="text-[#2e606b] text-sm sm:text-base leading-relaxed font-medium">
              Seorang developer dan vibe coder yang fokus membuat source code sederhana, bersih, dan langsung bisa dipakai untuk membantu pemula memahami dunia pemrograman web.
            </p>
          </div>
        </div>

        {/* Story / Mission */}
        <div className="p-8 rounded-2xl bg-white border border-[#b8d9e0] space-y-4 shadow-sm">
          <h2 className="text-xl font-bold text-[#0b1619] flex items-center gap-2">
            <Terminal size={20} className="text-[#3d808f]" />
            <span>Filosofi & Misi</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3a515f] leading-relaxed">
            Banyak pemula merasa kesulitan saat pertama kali belajar koding karena tutorial seringkali terlalu abstrak atau kompleks. Melalui proyek ini, saya menyediakan template dan source code yang <strong className="text-[#0b1619]">langsung jalan</strong>, <strong className="text-[#0b1619]">rapi</strong>, serta <strong className="text-[#0b1619]">mudah dipelajari</strong>.
          </p>
          <p className="text-sm sm:text-base text-[#3a515f] leading-relaxed">
            Semua transaksi pembelian source code dilakukan dengan cepat dan otomatis melalui platform <strong className="text-[#0b1619]">Lynk.id</strong>.
          </p>
        </div>

        {/* Tech Skills */}
        <div>
          <h2 className="text-xl font-bold text-[#0b1619] mb-6">
            Teknologi & Keahlian
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white border border-[#b8d9e0] flex items-center justify-between shadow-xs"
              >
                <span className="font-semibold text-sm text-[#0b1619]">
                  {skill.name}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#dbecf0] text-[#2e606b] border border-[#b8d9e0]">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Store */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#dbecf0] via-[#edf5f7] to-[#dfece0] border border-[#b8d9e0] text-[#0b1619] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-bold text-lg mb-1">Mari Terhubung & Berdiskusi</h3>
            <p className="text-xs sm:text-sm text-[#2e606b] font-medium">
              Kunjungi sosial media atau profil toko saya di Lynk.id.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://lynk.id/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#0b1619] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#1f4047] transition-colors shadow-md"
            >
              <span>Lynk.id Store</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#b8d9e0] hover:bg-[#dbecf0] text-[#0b1619] transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://instagram.com/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#b8d9e0] hover:bg-[#dbecf0] text-[#0b1619] transition-colors"
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
