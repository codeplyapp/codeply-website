"use client";
import React from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { SocialCloud } from "@/components/ui/footer-section-1-utils/social-cloud";
import { motion, Variants } from "framer-motion";

const CodeplyLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
      <div className="w-10 h-10 rounded-xl bg-[#9400FF] flex items-center justify-center shadow-lg shadow-[#9400FF]/40">
        <Code2 size={22} className="text-white" />
      </div>
      <span className="font-heading">
        code<span className="text-[#9400FF]">ply</span>
      </span>
    </Link>
  );
};

export default function Footer1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <footer className="w-full py-12 bg-[#0a001a] text-white overflow-hidden border-t border-[var(--border-color)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="container mx-auto px-4 flex flex-col items-center gap-10 mb-12"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <CodeplyLogo />
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium relative z-10"
        >
          {[
            { label: "Beranda", href: "/" },
            { label: "Produk", href: "/produk" },
            { label: "Portofolio", href: "/portofolio" },
            { label: "Tentang", href: "/tentang" },
            { label: "Lynk.id Store", href: "https://lynk.id/codeply" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative px-3 py-1.5 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-[#d399ff] transition-colors duration-300">
                {item.label}
              </span>
              <motion.span
                className="absolute inset-0 bg-[#27005D]/80 rounded-md -z-0 origin-center border border-[#9400FF]/30"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Social Media Icons */}
        <motion.div variants={itemVariants}>
          <SocialCloud className="text-foreground" />
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-full h-12 border-y border-white opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
        style={{ backgroundSize: "10px 10px" }}
        initial={{ backgroundPositionX: "0%" }}
        whileInView={{ backgroundPositionX: "100%" }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 20,
        }}
      />

      {/* Copyright */}
      <motion.div
        className="container mx-auto px-4 mt-8 text-center text-sm text-[var(--text-muted)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} Codeply. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
