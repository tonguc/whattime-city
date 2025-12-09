import { cities, countries } from '@/lib/cities'

export default async function sitemap() {
  const baseUrl = 'https://whattime.city'
  
  // Ana sayfa
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]
  
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
  
  return [...routes, ...cityRoutes, ...countryRoutes]
}
