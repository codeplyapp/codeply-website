import { Code2, Zap, ShieldCheck, BookOpen } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: Code2,
    title: "Struktur Kode Rapi",
    description:
      "Ditulis dengan prinsip clean code sehingga mudah dipahami dan mudah dimodifikasi sesuai kebutuhan projekmu.",
  },
  {
    icon: Zap,
    title: "Langsung Siap Run",
    description:
      "Tinggal download, install dependensi (jika ada), dan jalankan. Tanpa perlu konfigurasi rumit yang membingungkan.",
  },
  {
    icon: BookOpen,
    title: "Dokumentasi & Komentar",
    description:
      "Disertai petunjuk penggunaan dan komentar penjelasan di setiap fungsi penting untuk membantu proses belajar.",
  },
  {
    icon: ShieldCheck,
    title: "Transaksi via Lynk.id",
    description:
      "Proses pembayaran fleksibel (QRIS, E-Wallet, Transfer Bank) dan pengiriman file otomatis secara aman lewat Lynk.id.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#140033] border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Mengapa Memilih Source Code <span className="gradient-text">Codeply</span>?
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              Didesain khusus untuk mempercepat progress kodingmu tanpa harus mulai dari nol.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <FadeIn key={title} delay={idx * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-[#0a001a] border border-[var(--border-color)] hover:border-[#9400FF] transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-[#27005D]/80 text-[#d399ff] border border-[#9400FF]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
