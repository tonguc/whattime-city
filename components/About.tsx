import Link from "next/link";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-amber/10 border border-amber/20 rounded-full text-amber text-sm font-semibold">
              25+ Yıl Deneyim
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Dijital Dünyanın
              <br />
              <span className="text-gradient">Deneyimli Rehberi</span>
            </h2>
            
            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                1998'den bu yana dijital dünyada faaliyet gösteriyorum. UI/UX tasarım, SEO danışmanlığı ve dijital pazarlama alanlarında 500'den fazla projeye imza attım.
              </p>
              <p>
                Markaların dijital varlıklarını güçlendirmelerine, hedef kitlelerine ulaşmalarına ve online satışlarını artırmalarına yardımcı oluyorum.
              </p>
              <p>
                Modern teknolojileri ve kanıtlanmış stratejileri birleştirerek, işinizin dijital potansiyelini maksimize ediyorum.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white">Kanıtlanmış Sonuçlar</div>
                  <div className="text-gray-400 text-sm">500+ başarılı proje</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white">Modern Teknolojiler</div>
                  <div className="text-gray-400 text-sm">Next.js, AI, Analytics</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white">Stratejik Yaklaşım</div>
                  <div className="text-gray-400 text-sm">Veri odaklı kararlar</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white">Kişisel Hizmet</div>
                  <div className="text-gray-400 text-sm">Birebir danışmanlık</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/hakkimda" className="btn btn-secondary">
                Detaylı Bilgi
              </Link>
            </div>
          </div>

          {/* Right: Stats/Visual */}
          <div className="relative">
            <div className="card space-y-8">
              {/* Expertise Areas */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Uzmanlık Alanları</h3>
                <div className="space-y-4">
                  {[
                    { name: "UI/UX Tasarım", level: 95 },
                    { name: "SEO", level: 90 },
                    { name: "Dijital Pazarlama", level: 90 },
                    { name: "Web Development", level: 85 },
                    { name: "AI Entegrasyonu", level: 80 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>{skill.name}</span>
                        <span className="text-amber">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates/Badges */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Sertifikalar</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-navy rounded-lg border border-gray-800">
                    <div className="text-2xl mb-1">🎓</div>
                    <div className="text-xs text-gray-400">Google Analytics</div>
                  </div>
                  <div className="text-center p-3 bg-navy rounded-lg border border-gray-800">
                    <div className="text-2xl mb-1">🎓</div>
                    <div className="text-xs text-gray-400">Google Ads</div>
                  </div>
                  <div className="text-center p-3 bg-navy rounded-lg border border-gray-800">
                    <div className="text-2xl mb-1">🎓</div>
                    <div className="text-xs text-gray-400">Meta Blueprint</div>
                  </div>
                  <div className="text-center p-3 bg-navy rounded-lg border border-gray-800">
                    <div className="text-2xl mb-1">🎓</div>
                    <div className="text-xs text-gray-400">SEO Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
