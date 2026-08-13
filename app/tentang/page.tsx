import type { Metadata } from "next";
import Image from "next/image";
import { Terminal, ExternalLink } from "lucide-react";
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
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#c13e63] to-[#ab5491] p-1 shrink-0 shadow-xl">
            <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center overflow-hidden p-2">
              <Image
                src="/logo.png"
                alt="Codeply Logo"
                width={100}
                height={100}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b090e] mb-3">
              Halo, Saya <span className="gradient-text">Codeply</span> 👋
            </h1>
            <p className="text-[#74253c] text-sm sm:text-base leading-relaxed font-medium">
              Seorang developer dan vibe coder yang fokus membuat source code sederhana, bersih, dan langsung bisa dipakai untuk membantu pemula memahami dunia pemrograman web.
            </p>
          </div>
        </div>

        {/* Story / Mission */}
        <div className="p-8 rounded-2xl bg-white border border-[#e6b2c1] space-y-4 shadow-sm">
          <h2 className="text-xl font-bold text-[#1b090e] flex items-center gap-2">
            <Terminal size={20} className="text-[#c13e63]" />
            <span>Filosofi & Misi</span>
          </h2>
          <p className="text-sm sm:text-base text-[#623745] leading-relaxed">
            Banyak pemula merasa kesulitan saat pertama kali belajar koding karena tutorial seringkali terlalu abstrak atau kompleks. Melalui proyek ini, saya menyediakan template dan source code yang <strong className="text-[#1b090e]">langsung jalan</strong>, <strong className="text-[#1b090e]">rapi</strong>, serta <strong className="text-[#1b090e]">mudah dipelajari</strong>.
          </p>
          <p className="text-sm sm:text-base text-[#623745] leading-relaxed">
            Semua transaksi pembelian source code dilakukan dengan cepat dan otomatis melalui platform <strong className="text-[#1b090e]">Lynk.id</strong>.
          </p>
        </div>

        {/* Tech Skills */}
        <div>
          <h2 className="text-xl font-bold text-[#1b090e] mb-6">
            Teknologi & Keahlian
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white border border-[#e6b2c1] flex items-center justify-between shadow-xs"
              >
                <span className="font-semibold text-sm text-[#1b090e]">
                  {skill.name}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#f3d8e0] text-[#74253c] border border-[#e6b2c1]">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Store */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#f3d8e0] via-[#f9ecef] to-[#eedde9] border border-[#e6b2c1] text-[#1b090e] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-bold text-lg mb-1">Mari Terhubung & Berdiskusi</h3>
            <p className="text-xs sm:text-sm text-[#74253c] font-medium">
              Kunjungi sosial media atau profil toko saya di Lynk.id.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://lynk.id/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#c13e63] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#9a324f] transition-colors shadow-md"
            >
              <span>Lynk.id Store</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#e6b2c1] hover:bg-[#f3d8e0] text-[#1b090e] transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://instagram.com/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#e6b2c1] hover:bg-[#f3d8e0] text-[#1b090e] transition-colors"
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
