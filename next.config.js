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
  
  // 301 Redirects for SEO - Old /tools/* URLs to new root-level URLs
  async redirects() {
    return [
      {
        source: '/tools/converter/',
        destination: '/time-converter/',
        permanent: true, // 301 redirect
      },
      {
        source: '/tools/converter',
        destination: '/time-converter/',
        permanent: true,
      },
      {
        source: '/tools/flight-times/',
        destination: '/flight-time/',
        permanent: true,
      },
      {
        source: '/tools/flight-times',
        destination: '/flight-time/',
        permanent: true,
      },
      {
        source: '/tools/jet-lag/',
        destination: '/jet-lag-advisor/',
        permanent: true,
      },
      {
        source: '/tools/jet-lag',
        destination: '/jet-lag-advisor/',
        permanent: true,
      },
      {
        source: '/tools/event-time/',
        destination: '/event-time/',
        permanent: true,
      },
      {
        source: '/tools/event-time',
        destination: '/event-time/',
        permanent: true,
      },
      {
        source: '/tools/alarm/',
        destination: '/world-alarm/',
        permanent: true,
      },
      {
        source: '/tools/alarm',
        destination: '/world-alarm/',
        permanent: true,
      },
      {
        source: '/tools/meeting-planner/',
        destination: '/meeting/',
        permanent: true,
      },
      {
        source: '/tools/meeting-planner',
        destination: '/meeting/',
        permanent: true,
      },
    ]
  },

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