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
    <section className="py-20 bg-[#dbecf0]/40 border-y border-[#b8d9e0]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#0b1619] mb-4">
              Mengapa Memilih Source Code <span className="gradient-text">Codeply</span>?
            </h2>
            <p className="text-[#2e606b] text-sm sm:text-base">
              Didesain khusus untuk mempercepat progress kodingmu tanpa harus mulai dari nol.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <FadeIn key={title} delay={idx * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-white border border-[#b8d9e0]/80 hover:border-[#3d808f] transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-[#dbecf0] text-[#3d808f] border border-[#b8d9e0] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#0b1619] mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-[#3a515f] leading-relaxed">
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
