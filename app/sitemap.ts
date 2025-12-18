import { cities, countries, getTier1Cities } from '@/lib/cities'

export default async function sitemap() {
  const baseUrl = 'https://whattime.city'
  
  // Ana sayfalar
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/map`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/country`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
  
  // Tool sayfaları
  const toolSlugs = ['converter', 'meeting-planner', 'flight-times', 'jet-lag', 'event-time', 'alarm']
  const toolRoutes = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Tüm şehir sayfaları
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: city.tier === 1 ? 0.9 : city.tier === 2 ? 0.8 : 0.7,
  }))
  
  // Tüm ülke sayfaları
  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/country/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // Time comparison sayfaları (popüler kombinasyonlar)
  const tier1 = getTier1Cities()
  const tier1Slugs = tier1.map(c => c.slug)
  
  const popularTier2 = [
    'istanbul', 'moscow', 'berlin', 'madrid', 'rome', 'amsterdam',
    'bangkok', 'seoul', 'mumbai', 'delhi', 'shanghai', 'beijing',
    'sao-paulo', 'mexico-city', 'toronto', 'chicago', 'los-angeles',
    'san-francisco', 'miami', 'seattle', 'boston', 'dallas',
    'cairo', 'johannesburg', 'lagos', 'nairobi',
    'melbourne', 'auckland', 'jakarta', 'manila', 'kuala-lumpur',
    'riyadh', 'tel-aviv', 'doha', 'abu-dhabi'
  ]
  
  const allSlugs = Array.from(new Set([...tier1Slugs, ...popularTier2]))
  const validSlugs = allSlugs.filter(slug => cities.find(c => c.slug === slug))
  
  const timeCompareRoutes: { url: string; lastModified: Date; changeFrequency: 'daily'; priority: number }[] = []
  
  for (const from of validSlugs) {
    for (const to of validSlugs) {
      if (from !== to) {
        // Tier 1 kombinasyonları daha yüksek öncelik
        const fromCity = cities.find(c => c.slug === from)
        const toCity = cities.find(c => c.slug === to)
        const priority = (fromCity?.tier === 1 && toCity?.tier === 1) ? 0.8 : 0.6
        
        timeCompareRoutes.push({
          url: `${baseUrl}/time/${from}/${to}`,
          lastModified: new Date(),
          changeFrequency: 'daily' as const,
          priority,
        })
      }
    }
  }
  
  return [...staticRoutes, ...toolRoutes, ...cityRoutes, ...countryRoutes, ...timeCompareRoutes]
}
