import Hero from "@/components/ui/grain-gradient-hero-section";
import FeaturedProductsSection from "@/components/sections/FeaturedProducts";
import WhyUs from "@/components/sections/WhyUs";
import CTASection from "@/components/sections/CTASection";
import { getFeaturedProducts } from "@/lib/notion";

export const revalidate = 3600; // Revalidate every 1 hour (ISR)

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      <Hero
        title="Siap Pakai, Pelajari, & Kembangkan Projekmu"
        subtitle="Kumpulan source code berkualitas tinggi yang dirancang simpel dan rapi untuk pemula & vibe coder."
        ctaLabel="Eksplor Etalase"
        ctaHref="/produk"
      />
      <FeaturedProductsSection products={featuredProducts} />
      <WhyUs />
      <CTASection />
    </>
  );
}
