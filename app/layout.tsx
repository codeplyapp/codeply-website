import type { Metadata } from "next";
import "./globals.css";
import DockNav from "@/components/layout/DockNav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Codeply — Source Code untuk Pemula",
  description:
    "Vibe coder yang menjual source code simple berkualitas untuk pemula. Template HTML, CSS, JavaScript, React, dan PHP siap pakai.",
  keywords: ["source code", "template html", "belajar coding", "pemula coding", "jual source code"],
  authors: [{ name: "Codeply" }],
  openGraph: {
    title: "Codeply — Source Code untuk Pemula",
    description: "Source code simple berkualitas untuk pemula. Beli, pelajari, dan kembangkan!",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-[#0a0a0a] text-white">
        <main className="min-h-screen pb-24">{children}</main>
        <DockNav />
        <Footer />
      </body>
    </html>
  );
}
