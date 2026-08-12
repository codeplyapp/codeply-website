import Hero from "@/components/sections/Hero";
import FeaturedProductsSection from "@/components/sections/FeaturedProducts";
import WhyUs from "@/components/sections/WhyUs";
import CTASection from "@/components/sections/CTASection";
import { getFeaturedProducts } from "@/lib/notion";

export const revalidate = 3600; // Revalidate every 1 hour (ISR)

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      <Hero />
      <FeaturedProductsSection products={featuredProducts} />
      <WhyUs />
      <CTASection />
    </>
  );
}
