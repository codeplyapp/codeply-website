"use client";
import React from "react";
import Logo from "@/components/ui/Logo";
import { SocialCloud } from "@/components/ui/footer-section-1-utils/social-cloud";
import { motion, Variants } from "framer-motion";

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
    <footer className="w-full py-12 bg-[#f9ecef] text-[#1b090e] overflow-hidden border-t border-[#e6b2c1]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="container mx-auto px-4 flex flex-col items-center gap-10 mb-12"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Logo size={42} />
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
              className="relative px-3 py-1.5 group text-[#74253c]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-[#1b090e] transition-colors duration-300 font-semibold">
                {item.label}
              </span>
              <motion.span
                className="absolute inset-0 bg-white rounded-md -z-0 origin-center border border-[#e6b2c1] shadow-sm"
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
        className="w-full h-12 border-y border-[#1b090e] opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
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
        className="container mx-auto px-4 mt-8 text-center text-sm text-[#83495c]"
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
