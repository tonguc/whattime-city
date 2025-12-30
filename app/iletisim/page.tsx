import { Metadata } from 'next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Projeleriniz için benimle iletişime geçin. Ücretsiz danışmanlık için formu doldurun.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section py-16 bg-navy-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient">İletişim</span>
            </h1>
            <p className="text-xl text-gray-400">
              Projeleriniz için benimle iletişime geçin. Size en kısa sürede dönüş yapacağım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Birlikte Çalışalım
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  25+ yıllık deneyimimle, dijital projelerinizde size yardımcı olmak için buradayım. 
                  Ücretsiz danışmanlık için formu doldurun veya doğrudan ulaşın.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a 
                  href="mailto:info@tonguckaracay.com"
                  className="card flex items-start gap-4 group hover:border-amber"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-navy transition-all flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">E-posta</div>
                    <div className="text-gray-400">info@tonguckaracay.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+905321234567"
                  className="card flex items-start gap-4 group hover:border-amber"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-navy transition-all flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <div className="text-gray-400">+90 (532) 123 45 67</div>
                  </div>
                </a>

                <div className="card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center text-amber flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Konum</div>
                    <div className="text-gray-400">İstanbul, Türkiye</div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card bg-amber/5 border-amber/20">
                <h3 className="font-semibold text-lg mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span className="text-white">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi</span>
                    <span className="text-white">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar</span>
                    <span className="text-amber">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6">
                Ücretsiz Danışmanlık
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-navy border border-gray-800 rounded-lg focus:border-amber focus:outline-none transition-colors"
                      placeholder="Adınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-navy border border-gray-800 rounded-lg focus:border-amber focus:outline-none transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-navy border border-gray-800 rounded-lg focus:border-amber focus:outline-none transition-colors"
                    placeholder="+90 (5__) ___ __ __"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Hizmet Seçin *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-navy border border-gray-800 rounded-lg focus:border-amber focus:outline-none transition-colors"
                  >
                    <option value="">Seçiniz</option>
                    <option value="ui-ux">UI/UX Tasarım</option>
                    <option value="seo">SEO Danışmanlığı</option>
                    <option value="digital-marketing">Dijital Pazarlama</option>
                    <option value="ai">AI Çözümleri</option>
                    <option value="social-media">Sosyal Medya Yönetimi</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-navy border border-gray-800 rounded-lg focus:border-amber focus:outline-none transition-colors resize-none"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary flex items-center justify-center gap-2 py-4"
                >
                  <Send className="w-5 h-5" />
                  Gönder
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Mesajınızı aldıktan sonra 24 saat içinde size dönüş yapacağım.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-navy-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Hemen Başlayalım
            </h2>
            <p className="text-gray-400 text-lg">
              Projeniz için ücretsiz danışmanlık almak ister misiniz? Formu doldurun veya doğrudan arayın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+905321234567" className="btn btn-primary">
                Hemen Ara
              </a>
              <a href="mailto:info@tonguckaracay.com" className="btn btn-secondary">
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
