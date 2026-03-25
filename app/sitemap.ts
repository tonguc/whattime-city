import { cities, countries, getTier1Cities } from '@/lib/cities'

export default async function sitemap() {
  const baseUrl = 'https://whattime.city'
  const now = new Date()

  // Ana sayfalar (trailing slash ile)
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/map/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/country/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/widget/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Tool + content sayfaları
  const toolRoutes = [
    { slug: 'time', priority: 0.9 },
    { slug: 'time-converter', priority: 0.8 },
    { slug: 'meeting', priority: 0.8 },
    { slug: 'india', priority: 0.9 },
    { slug: 'brazil', priority: 0.9 },
    { slug: 'nigeria', priority: 0.9 },
    { slug: 'california', priority: 0.9 },
    { slug: 'philippines', priority: 0.9 },
    { slug: 'uk', priority: 0.9 },
    { slug: 'australia', priority: 0.9 },
    { slug: 'japan', priority: 0.9 },
    { slug: 'germany', priority: 0.9 },
    { slug: 'canada', priority: 0.9 },
    { slug: 'france', priority: 0.9 },
    { slug: 'mexico', priority: 0.9 },
    { slug: 'dubai', priority: 0.9 },
    { slug: 'singapore', priority: 0.9 },
    { slug: 'south-korea', priority: 0.9 },
    { slug: 'china', priority: 0.9 },
    { slug: 'texas', priority: 0.9 },
    { slug: 'turkey', priority: 0.9 },
    { slug: 'pakistan', priority: 0.9 },
    { slug: 'florida', priority: 0.9 },
    { slug: 'new-york-state', priority: 0.9 },
    { slug: 'indonesia', priority: 0.9 },
    { slug: 'egypt', priority: 0.9 },
    { slug: 'illinois', priority: 0.9 },
    { slug: 'washington-state', priority: 0.9 },
    { slug: 'vietnam', priority: 0.9 },
    { slug: 'russia', priority: 0.9 },
    { slug: 'netherlands', priority: 0.9 },
    { slug: 'spain', priority: 0.9 },
    { slug: 'ohio', priority: 0.9 },
    { slug: 'georgia-state', priority: 0.9 },
    { slug: 'michigan', priority: 0.9 },
    { slug: 'new-zealand', priority: 0.9 },
    { slug: 'sweden', priority: 0.9 },
    { slug: 'italy', priority: 0.9 },
    { slug: 'argentina', priority: 0.9 },
    { slug: 'saudi-arabia', priority: 0.9 },
    { slug: 'north-carolina', priority: 0.9 },
    { slug: 'pennsylvania', priority: 0.9 },
    { slug: 'arizona', priority: 0.9 },
    { slug: 'colorado', priority: 0.9 },
    { slug: 'virginia', priority: 0.9 },
    { slug: 'minnesota', priority: 0.9 },
    { slug: 'south-africa', priority: 0.9 },
    { slug: 'kenya', priority: 0.9 },
    { slug: 'thailand', priority: 0.9 },
    { slug: 'malaysia', priority: 0.9 },
    { slug: 'colombia', priority: 0.9 },
    { slug: 'morocco', priority: 0.9 },
    { slug: 'tennessee', priority: 0.9 },
    { slug: 'nevada', priority: 0.9 },
    { slug: 'oregon', priority: 0.9 },
    { slug: 'massachusetts', priority: 0.9 },
    { slug: 'poland', priority: 0.9 },
    { slug: 'ukraine', priority: 0.9 },
    { slug: 'bangladesh', priority: 0.9 },
    { slug: 'ethiopia', priority: 0.9 },
    { slug: 'wisconsin', priority: 0.9 },
    { slug: 'maryland', priority: 0.9 },
    { slug: 'new-jersey', priority: 0.9 },
    { slug: 'utah', priority: 0.9 },
    { slug: 'peru', priority: 0.9 },
    { slug: 'chile', priority: 0.9 },
    { slug: 'greece', priority: 0.9 },
    { slug: 'portugal', priority: 0.9 },
    { slug: 'connecticut', priority: 0.9 },
    { slug: 'missouri', priority: 0.9 },
    { slug: 'indiana', priority: 0.9 },
    { slug: 'iowa', priority: 0.9 },
    { slug: 'ghana', priority: 0.9 },
    { slug: 'tanzania', priority: 0.9 },
    { slug: 'venezuela', priority: 0.9 },
    { slug: 'myanmar', priority: 0.9 },
    { slug: 'kansas', priority: 0.9 },
    { slug: 'alabama', priority: 0.9 },
    { slug: 'south-carolina', priority: 0.9 },
    { slug: 'kentucky', priority: 0.9 },
    { slug: 'daylight-saving-time', priority: 0.8 },
    // DST cluster subpages
    { slug: 'daylight-saving-time/usa', priority: 0.8 },
    { slug: 'daylight-saving-time/uk', priority: 0.8 },
    { slug: 'daylight-saving-time/europe', priority: 0.8 },
    { slug: 'daylight-saving-time/australia', priority: 0.8 },
    // Timezone pair pages — high-volume abbreviation queries
    { slug: 'pst-to-est', priority: 0.8 },
    { slug: 'gmt-to-est', priority: 0.8 },
    { slug: 'cst-to-est', priority: 0.8 },
    { slug: 'est-to-pst', priority: 0.8 },
    { slug: 'ist-to-est', priority: 0.8 },
    { slug: 'est-to-gmt', priority: 0.8 },
    { slug: 'cst-to-pst', priority: 0.8 },
    // New TZ pairs — India corridor + Asia/Pacific
    { slug: 'ist-to-pst', priority: 0.8 },
    { slug: 'ist-to-cst', priority: 0.8 },
    { slug: 'ist-to-gmt', priority: 0.8 },
    { slug: 'jst-to-est', priority: 0.7 },
    { slug: 'aest-to-est', priority: 0.7 },
    { slug: 'military-time', priority: 0.8 },
    { slug: 'flight-time', priority: 0.7 },
    { slug: 'jet-lag-advisor', priority: 0.7 },
    { slug: 'event-time', priority: 0.7 },
    { slug: 'world-alarm', priority: 0.7 },
  ].map((tool) => ({
    url: `${baseUrl}/${tool.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: tool.priority,
  }))

  // Area code pages
  const areaCodeRoutes = ['929', '404', '437', '206', '408', '212', '310', '312', '305', '415'].map(code => ({
    url: `${baseUrl}/area-code/${code}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: slug ? 0.7 : 0.8,
    }))
  )

  // Tüm şehir sayfaları (trailing slash ile)
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: city.tier === 1 ? 0.9 : city.tier === 2 ? 0.8 : 0.7,
  }))

  // Tüm ülke sayfaları (trailing slash ile)
  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/country/${country.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // /time/[from]/[to] — Tier 1 şehirler arası kombinasyonlar
  const tier1Slugs = getTier1Cities().map(c => c.slug)
  const timeComparisonRoutes: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'daily' | 'weekly' | 'monthly'
    priority: number
  }> = []

  for (const fromSlug of tier1Slugs) {
    for (const toSlug of tier1Slugs) {
      if (fromSlug !== toSlug) {
        timeComparisonRoutes.push({
          url: `${baseUrl}/time/${fromSlug}/${toSlug}/`,
          lastModified: now,
          changeFrequency: 'daily' as const,
          priority: 0.6,
        })
      }
    }
  }

  return [
    ...staticRoutes,
    ...toolRoutes,
    ...areaCodeRoutes,
    ...guideRoutes,
    ...cityRoutes,
    ...countryRoutes,
    ...timeComparisonRoutes,
  ]
}
