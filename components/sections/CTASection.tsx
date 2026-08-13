import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#f9ecef]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#f3d8e0] via-[#f9ecef] to-[#eedde9] border border-[#e6b2c1] p-8 sm:p-12 text-center shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1b090e] mb-4 leading-tight">
                Punya Pertanyaan atau Ingin Request Source Code?
              </h2>
              <p className="text-sm sm:text-base text-[#74253c] mb-8 leading-relaxed font-medium">
                Kunjungi storefront resmi Codeply di Lynk.id untuk membeli langsung, atau hubungi saya via DM untuk diskusi projek custom.
              </p>
              <a
                href="https://lynk.id/codeply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#c13e63] hover:bg-[#9a324f] text-white font-bold text-base transition-all shadow-xl hover:scale-105"
              >
                <span>Kunjungi Storefront Lynk.id</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
