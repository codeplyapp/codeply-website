"use client";
import React from "react";
import { SocialCloud } from "@/components/ui/footer-section-1-utils/social-cloud";
import { motion, Variants } from "framer-motion";

const SolaceUILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="64"
      height="38"
      viewBox="0 0 64 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20.1032L39.8387 20.1032C44.7808 20.1032 48.7871 24.1095 48.7871 29.0516C48.7871 33.9937 44.7808 38 39.8387 38L1.56459e-06 38L0 20.1032Z"
        fill="currentColor"
      />
      <path
        d="M63.4968 17.8968L23.6581 17.8968C18.716 17.8968 14.7097 13.8904 14.7097 8.94839C14.7097 4.00633 18.716 0 23.6581 0L63.4968 0V17.8968Z"
        fill="currentColor"
      />
    </svg>
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
          <SolaceUILogo className="h-10 w-auto text-[#9400FF]" />
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
