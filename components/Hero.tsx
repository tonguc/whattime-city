import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative section py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-amber/10 border border-amber/20 rounded-full text-amber text-sm font-semibold">
            25+ Yıl Deneyim
          </div>

          {/* Headline */}
          <h1 className="heading">
            Dijital Dönüşümünüzün
            <br />
            <span className="text-gradient">Stratejik Ortağı</span>
          </h1>

          {/* Subheadline */}
          <p className="subheading max-w-2xl mx-auto">
            UI/UX tasarım, SEO danışmanlığı ve dijital pazarlama ile markanızı dijital dünyada öne çıkarıyorum.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/iletisim" className="btn btn-primary px-8 py-4 text-lg">
              Ücretsiz Danışmanlık
            </Link>
            <Link href="/hakkimda" className="btn btn-secondary px-8 py-4 text-lg">
              Hakkımda
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber">25+</div>
              <div className="text-gray-400">Yıl Deneyim</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber">500+</div>
              <div className="text-gray-400">Proje</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber">100+</div>
              <div className="text-gray-400">Mutlu Müşteri</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber">%95</div>
              <div className="text-gray-400">Başarı Oranı</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
}
