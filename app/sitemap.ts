import { cities, countries, getTier1Cities } from '@/lib/cities'

export default async function sitemap() {
  const baseUrl = 'https://whattime.city'
  
  // Ana sayfalar (trailing slash ile)
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/map/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/country/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/widget/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
  
  // Tool sayfaları (trailing slash ile) - ROOT LEVEL URLs for SEO
  // ✅ /time ve /meeting ana tool sayfaları indexed
  // ❌ /time/[from]/[to] ve /meeting/[cities] noindex (sitemap'te YOK)
  const toolRoutes = [
    { slug: 'time', priority: 0.9 },
    { slug: 'time-converter', priority: 0.8 },
    { slug: 'meeting', priority: 0.8 },
    { slug: 'flight-time', priority: 0.7 },
    { slug: 'jet-lag-advisor', priority: 0.7 },
    { slug: 'event-time', priority: 0.7 },
    { slug: 'world-alarm', priority: 0.7 },
  ].map((tool) => ({
    url: `${baseUrl}/${tool.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: tool.priority,
  }))
  
  // Guide sayfaları - SADECE 8 PREMIUM ŞEHİR (kaliteli içerik var)
  // Her biri pillar + 10 cluster = 11 sayfa
  const premiumGuideCities = [
    'new-york', 'london', 'tokyo', 'dubai', 
    'singapore', 'paris', 'sydney', 'istanbul'
  ]
  
  const premiumClusterSlugs = [
    '', // pillar page (overview)
    'business-hours',
    'best-time-to-visit',
    'remote-work',
    '24-hours',
    'call-times',
    'stock-market',
    'holidays',
    'digital-nomad',
    'time-difference',
    'travel-planning',
  ]
  
  const guideRoutes = premiumGuideCities.flatMap((citySlug) => 
    premiumClusterSlugs.map((slug) => ({
      url: slug ? `${baseUrl}/${citySlug}/guide/${slug}/` : `${baseUrl}/${citySlug}/guide/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: slug ? 0.7 : 0.8, // pillar: 0.8, cluster: 0.7
    }))
  )
  
  // Tüm şehir sayfaları (trailing slash ile) - ✅ HUB PAGES (SEO VALUE HERE)
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: city.tier === 1 ? 0.9 : city.tier === 2 ? 0.8 : 0.7,
  }))
  
  // Tüm ülke sayfaları (trailing slash ile)
  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/country/${country.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // ❌ /time/[from]/[to] sayfaları ÇIKARILDI
  // ❌ /meeting/[cities] sayfaları ÇIKARILDI
  // Sebep: noindex tool output - crawl budget israfı önlendi
  // SEO değeri hub sayfalarda: /istanbul/, /london/, /time-converter/, /meeting/

  return [...staticRoutes, ...toolRoutes, ...guideRoutes, ...cityRoutes, ...countryRoutes]
}
