import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/ui/Icons";

const socialLinks = [
  {
    href: "https://lynk.id/codeply",
    icon: ExternalLink,
    label: "Lynk.id",
  },
  {
    href: "https://github.com/codeply",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://instagram.com/codeply",
    icon: InstagramIcon,
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "/produk", label: "Produk" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/tentang", label: "Tentang" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[#0a001a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-[#9400FF] flex items-center justify-center shadow-md">
                <Code2 size={18} className="text-white" />
              </div>
              <span>
                code<span className="text-[#9400FF]">ply</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Source code simple, berkualitas, untuk pemula yang ingin belajar
              coding dengan cara yang menyenangkan.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[#9400FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Temukan Saya
            </h3>
            <ul className="space-y-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#9400FF] transition-colors"
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[var(--text-muted)]">
            © {year} Codeply. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Dibuat dengan ❤️ oleh{" "}
            <a
              href="https://lynk.id/codeply"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9400FF] hover:underline"
            >
              Codeply
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
