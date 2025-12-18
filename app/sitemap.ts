import { cities, countries } from '@/lib/cities'

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
  
  return [...staticRoutes, ...toolRoutes, ...cityRoutes, ...countryRoutes]
}
