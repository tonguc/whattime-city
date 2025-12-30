import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı, modern ve dönüşüm sağlayan arayüz tasarımları.",
    href: "/hizmetler/ui-ux-tasarim",
    features: ["Kullanıcı Araştırması", "Wireframe & Prototip", "Responsive Tasarım"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO Danışmanlığı",
    description: "Google'da üst sıralara çıkın. Organik trafiğinizi artırın.",
    href: "/hizmetler/seo-danismanligi",
    features: ["Teknik SEO", "İçerik Optimizasyonu", "Link Building"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Dijital Pazarlama",
    description: "Hedef kitlenize ulaşın. Satışlarınızı ve marka bilinirliğinizi artırın.",
    href: "/hizmetler/dijital-pazarlama",
    features: ["Google Ads", "Meta Ads", "E-mail Marketing"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Çözümleri",
    description: "Yapay zeka destekli çözümlerle işlerinizi otomatize edin.",
    href: "/hizmetler/ai-cozumleri",
    features: ["Chatbot Entegrasyonu", "Otomasyon", "Veri Analizi"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Sosyal Medya Yönetimi",
    description: "Sosyal medya hesaplarınızı profesyonelce yönetin.",
    href: "/hizmetler/sosyal-medya-yonetimi",
    features: ["İçerik Stratejisi", "Community Management", "Reklam Kampanyaları"]
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="section bg-navy-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Sunduğum <span className="text-gradient">Hizmetler</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Dijital dünyada başarılı olmanız için ihtiyacınız olan tüm hizmetler
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="card glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-navy transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-amber transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-amber font-semibold group-hover:gap-4 transition-all">
                Detaylı Bilgi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/iletisim" className="btn btn-primary">
            Ücretsiz Teklif Alın
          </Link>
        </div>
      </div>
    </section>
  );
}
