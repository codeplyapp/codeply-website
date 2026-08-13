"use client";

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon } from "@/components/ui/Icons";
import { ExternalLink, Globe } from "lucide-react";

export function SocialCloud({ className }: { className?: string }) {
  const socials = [
    { name: "Lynk.id", href: "https://lynk.id/codeply", icon: ExternalLink },
    { name: "GitHub", href: "https://github.com/codeply", icon: GithubIcon },
    { name: "Instagram", href: "https://instagram.com/codeply", icon: InstagramIcon },
    { name: "Website", href: "/", icon: Globe },
  ];

  return (
    <div className={`flex items-center justify-center gap-4 ${className || ""}`}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-white border border-[#b8d9e0] text-[#2e606b] hover:text-[#0b1619] hover:border-[#3d808f] transition-all shadow-sm"
            title={social.name}
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
}
