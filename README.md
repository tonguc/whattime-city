# Tonguç Karaçay - Kişisel Website

Modern, performanslı ve SEO-optimize edilmiş kişisel website.

## 🚀 Özellikler

- ✅ **Next.js 15** - En yeni Next.js sürümü
- ✅ **TypeScript** - Tip güvenli kod
- ✅ **Tailwind CSS** - Modern, responsive tasarım
- ✅ **SEO Optimize** - Sitemap, robots.txt, meta tags
- ✅ **Blog Sistemi** - 18 blog yazısı + görseller (36 PNG)
- ✅ **Mobile-First** - Tüm cihazlarda mükemmel görünüm
- ✅ **Dark Theme** - Navy + Amber renk paleti
- ✅ **Performans** - Optimize edilmiş yükleme süreleri

## 📁 Proje Yapısı

```
whattime-city/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles + Tailwind
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── Header.tsx           # Navigation
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services grid
│   ├── About.tsx            # About section
│   ├── BlogPreview.tsx      # Blog preview
│   ├── FinalCTA.tsx         # Final CTA
│   └── Footer.tsx           # Footer
├── lib/                     # Utilities
│   └── blog.ts              # Blog data (18 posts)
├── public/                  # Static files
│   ├── images/blog/         # 36 blog görselleri
│   └── robots.txt           # Robots file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Blog Görselleri

**Toplam: 36 görsel (PNG)**
- 18 Featured Image (1200x630px) - OG image, sosyal paylaşım
- 18 Content Image (800x500px) - İçerik görseli

**Kategori Stilleri:**
- SEO: Veri grafikli, analitik
- Dijital Pazarlama: Dinamik daireler
- UI-UX: Minimal grid pattern

## 📦 Kurulum

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Geliştirme Sunucusu

```bash
npm run dev
```

Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

### 3. Production Build

```bash
npm run build
npm start
```

## 🚀 Vercel Deploy

### Hızlı Deploy

1. GitHub'a push et
2. Vercel'e import et
3. Auto-deploy

### CLI ile Deploy

```bash
npx vercel
```

## 🔧 Konfigürasyon

### SEO

`app/layout.tsx` içinde:
- Title templates
- Open Graph metadata
- Twitter cards
- Google Analytics ID

### Sitemap

Otomatik oluşturulur:
- Ana sayfalar
- 5 hizmet sayfası
- 18 blog yazısı

URL: `/sitemap.xml`

### Robots.txt

URL: `/robots.txt`

## 📝 Blog Sistemi

Blog yazıları `lib/blog.ts` içinde:

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  featured: boolean;
  featuredImage: string;  // /images/blog/*.png
  contentImage: string;   // /images/blog/*.png
}
```

## 🎯 Sonraki Adımlar

1. **Blog Sayfaları:**
   - `/blog` - Liste sayfası
   - `/blog/[slug]` - Detay sayfası

2. **Hizmet Sayfaları:**
   - `/hizmetler/ui-ux-tasarim`
   - `/hizmetler/seo-danismanligi`
   - `/hizmetler/dijital-pazarlama`
   - `/hizmetler/ai-cozumleri`
   - `/hizmetler/sosyal-medya-yonetimi`

3. **Diğer Sayfalar:**
   - `/hakkimda`
   - `/iletisim`

## 📊 Performans

- ⚡ Next.js 15 App Router
- 🖼️ Image optimization (WebP)
- 📦 Code splitting
- 🎨 Tailwind CSS JIT
- 🚀 Static generation where possible

## 🌐 SEO Checklist

- ✅ Meta tags (title, description)
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Structured data (TODO)
- ✅ Alt tags on images
- ✅ Semantic HTML
- ✅ Mobile responsive

## 📞 İletişim

- **Email:** info@whattime-city.com
- **Tel:** +90 (532) 123 45 67
- **Website:** https://whattime-city.com

## 📄 License

© 2024 Tonguç Karaçay. Tüm hakları saklıdır.
