/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },

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
      {
        source: '/time/:from/:to/',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/meeting/:cities/',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=86400' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // ── Tool sayfaları ──────────────────────────────────────────────
      { source: '/tools/converter/',        destination: '/time-converter/',   permanent: true },
      { source: '/tools/converter',         destination: '/time-converter/',   permanent: true },
      { source: '/tools/flight-times/',     destination: '/flight-time/',      permanent: true },
      { source: '/tools/flight-times',      destination: '/flight-time/',      permanent: true },
      { source: '/tools/jet-lag/',          destination: '/jet-lag-advisor/',  permanent: true },
      { source: '/tools/jet-lag',           destination: '/jet-lag-advisor/',  permanent: true },
      { source: '/tools/event-time/',       destination: '/event-time/',       permanent: true },
      { source: '/tools/event-time',        destination: '/event-time/',       permanent: true },
      { source: '/tools/alarm/',            destination: '/world-alarm/',      permanent: true },
      { source: '/tools/alarm',             destination: '/world-alarm/',      permanent: true },
      { source: '/tools/meeting-planner/',  destination: '/meeting/',          permanent: true },
      { source: '/tools/meeting-planner',   destination: '/meeting/',          permanent: true },

      // ── Duplicate slug temizliği ────────────────────────────────────
      { source: '/kochi/',   destination: '/kochi-india/',  permanent: true },
      { source: '/kochi',    destination: '/kochi-india/',  permanent: true },
      { source: '/dover/',   destination: '/dover-us/',     permanent: true },
      { source: '/dover',    destination: '/dover-us/',     permanent: true },
      { source: '/durham/',  destination: '/durham-us/',    permanent: true },
      { source: '/durham',   destination: '/durham-us/',    permanent: true },
      { source: '/lincoln/', destination: '/lincoln-us/',   permanent: true },
      { source: '/lincoln',  destination: '/lincoln-us/',   permanent: true },
      { source: '/toledo/',  destination: '/toledo-us/',    permanent: true },
      { source: '/toledo',   destination: '/toledo-us/',    permanent: true },

      // ── Eski karşılaştırma URL'leri ─────────────────────────────────
      { source: '/rome-compared-to-san-francisco/',    destination: '/time/rome/san-francisco/',    permanent: true },
      { source: '/rome-compared-to-san-francisco',     destination: '/time/rome/san-francisco/',    permanent: true },
      { source: '/paris-compared-to-san-francisco/',   destination: '/time/paris/san-francisco/',   permanent: true },
      { source: '/paris-compared-to-san-francisco',    destination: '/time/paris/san-francisco/',   permanent: true },
      { source: '/paris-versus-san-francisco/',        destination: '/time/paris/san-francisco/',   permanent: true },
      { source: '/paris-versus-san-francisco',         destination: '/time/paris/san-francisco/',   permanent: true },
      { source: '/china-vs-san-francisco/',            destination: '/time/beijing/san-francisco/', permanent: true },
      { source: '/china-vs-san-francisco',             destination: '/time/beijing/san-francisco/', permanent: true },
      { source: '/china-compared-to-san-francisco/',   destination: '/time/beijing/san-francisco/', permanent: true },
      { source: '/china-compared-to-san-francisco',    destination: '/time/beijing/san-francisco/', permanent: true },
      { source: '/nigeria-vs-brazil/',                 destination: '/time/lagos/sao-paulo/',       permanent: true },
      { source: '/nigeria-vs-brazil',                  destination: '/time/lagos/sao-paulo/',       permanent: true },

      // ── Guide URL 301s (old slug → canonical slug) ─────────────────
      // best-time-to-call → call-times  (8 premium cities)
      ...['new-york', 'london', 'tokyo', 'dubai', 'singapore', 'paris', 'sydney', 'istanbul'].flatMap(city => [
        { source: `/${city}/guide/best-time-to-call/`, destination: `/${city}/guide/call-times/`, permanent: true },
        { source: `/${city}/guide/best-time-to-call`,  destination: `/${city}/guide/call-times/`, permanent: true },
        // public-holidays → holidays
        { source: `/${city}/guide/public-holidays/`,   destination: `/${city}/guide/holidays/`,   permanent: true },
        { source: `/${city}/guide/public-holidays`,    destination: `/${city}/guide/holidays/`,   permanent: true },
        // 24-hours-itinerary → 24-hours
        { source: `/${city}/guide/24-hours-itinerary/`, destination: `/${city}/guide/24-hours/`,  permanent: true },
        { source: `/${city}/guide/24-hours-itinerary`,  destination: `/${city}/guide/24-hours/`,  permanent: true },
      ]),
    ]
  },
}

module.exports = nextConfig
