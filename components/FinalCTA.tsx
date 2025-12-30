import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-amber/10 border border-amber/20 rounded-full text-amber text-sm font-semibold">
            Hemen Başlayın
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Dijital Hedefflerinize
            <br />
            <span className="text-gradient">Birlikte Ulaşalım</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            25+ yıllık deneyimimle, markanızın dijital potansiyelini ortaya çıkarmanıza yardımcı olacağım. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/iletisim" className="btn btn-primary px-8 py-4 text-lg">
              Ücretsiz Danışmanlık
            </Link>
            <Link href="/hizmetler/seo-danismanligi" className="btn btn-secondary px-8 py-4 text-lg">
              Hizmetleri İncele
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber">500+</div>
              <div className="text-gray-400 text-sm">Tamamlanan Proje</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber">100+</div>
              <div className="text-gray-400 text-sm">Mutlu Müşteri</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber">%95</div>
              <div className="text-gray-400 text-sm">Başarı Oranı</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber">24/7</div>
              <div className="text-gray-400 text-sm">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
