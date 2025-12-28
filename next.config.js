/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ "output: 'export'" YOK. (Doğru, sildik)
  
  // URL sonuna slash ekler (SEO için iyidir)
  trailingSlash: true,
  
  // Resim optimizasyonu (Vercel bunu sever)
  images: {
    formats: ['image/avif', 'image/webp'],
    // Device sizes varsayılan bırakılabilir ama senin ayarların da kalsın, sorun yok.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false, // Vercel'de false olmalı (default budur)
  },

  // ⚠️ Experimental "optimizeCss" KALDIRILDI. 
  // Build hatalarının (TypeError: r is not a constructor) ana sebebi genelde budur.
  
  // Headers (Güvenlik ve Cache) - Olduğu gibi kalabilir, sorunsuz.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig