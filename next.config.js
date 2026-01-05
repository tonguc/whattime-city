/** @type {import('next').NextConfig} */
const nextConfig = {
  // URL sonuna slash ekler (SEO için iyidir)
  trailingSlash: true,
  
  // Resim optimizasyonu (Vercel bunu sever)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },

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

  // Headers (Güvenlik ve Cache)
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
      // ✅ Tool sayfaları için CDN cache (1 gün cache, 7 gün stale)
      {
        source: '/time/:from/:to/',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/meeting/:cities/',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
}

module.exports = nextConfig