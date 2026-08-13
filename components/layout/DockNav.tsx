"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  ShoppingBag,
  Briefcase,
  User,
  ExternalLink,
} from "lucide-react";

export default function DockNav() {
  const links = [
    {
      title: "Beranda",
      icon: <Home className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
      href: "/",
    },
    {
      title: "Etalase Produk",
      icon: <ShoppingBag className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
      href: "/produk",
    },
    {
      title: "Portofolio",
      icon: <Briefcase className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
      href: "/portofolio",
    },
    {
      title: "Tentang Saya",
      icon: <User className="h-full w-full text-neutral-700 dark:text-neutral-200" />,
      href: "/tentang",
    },
    {
      title: "Beli di Lynk.id",
      icon: <ExternalLink className="h-full w-full text-[var(--brand-primary)]" />,
      href: "https://lynk.id/codeply",
    },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto shadow-2xl rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]/90 backdrop-blur-md p-1.5">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
