import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a0a0f] via-[#0E21A0]/40 to-[#4D2DB7]/50 border border-[#4D2DB7]/40 p-8 sm:p-12 text-center shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Punya Pertanyaan atau Ingin Request Source Code?
              </h2>
              <p className="text-sm sm:text-base text-[#dcd6f7] mb-8 leading-relaxed">
                Kunjungi storefront resmi Codeply di Lynk.id untuk membeli langsung, atau hubungi saya via DM untuk diskusi projek custom.
              </p>
              <a
                href="https://lynk.id/codeply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-base hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
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
