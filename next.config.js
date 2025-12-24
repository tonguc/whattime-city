/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ STATİK EXPORT - Cloudflare Pages / GitHub Pages için
  output: 'export',
  
  // ✅ URL'lerin sonuna / ekler (SEO ve hosting uyumluluğu)
  trailingSlash: true,
  
  // ✅ Statik hosting Image Optimization desteklemez
  images: {
    unoptimized: true
  },
  
  // ✅ Build sırasında dinamik sayfalarda hata vermemesi için
  // generateStaticParams olmayan dinamik route'lar için
  // NOT: Tüm dinamik route'lar generateStaticParams kullanmalı
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
