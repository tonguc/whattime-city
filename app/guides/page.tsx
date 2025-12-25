import { Metadata } from 'next'
import Link from 'next/link'
import { getCityBySlug } from '@/lib/cities'
import { getCityDisplayConfig, getGuideCities } from '@/lib/cityDisplayConfig'

export const metadata: Metadata = {
  title: 'City Time Zone Guides | Business Hours, Best Times & More',
  description: 'Complete time zone guides for major world cities. Business hours, stock markets, best time to visit, remote work tips, holidays, and local insights for NYC, London, Tokyo, Dubai, Singapore, Paris, Sydney and more.',
  keywords: [
    'city time zone guides',
    'business hours by city',
    'best time to visit',
    'remote work time zones',
    'stock market hours',
    'city holidays',
    'time zone planning'
  ],
  openGraph: {
    title: 'City Time Zone Guides | Complete Resource',
    description: 'Everything you need to know about time in major world cities. Business hours, stock markets, travel tips, and more.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://whattime.city/guides'
  }
}

export default function GuidesPage() {
  // Get all cities that have guides
  const guideCitySlugs = getGuideCities()
  
  // Build city data with full info
  const guideCities = guideCitySlugs.map(slug => {
    const city = getCityBySlug(slug)
    const config = getCityDisplayConfig(slug)
    return {
      slug,
      city,
      config
    }
  }).filter(item => item.city) // Filter out any missing cities
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Simple Title - No Hero */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          City Time Zone Guides
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Complete guides for major world cities
        </p>
      </div>

      {/* City Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {guideCities.map(({ slug, city, config }) => (
            <Link
              key={slug}
              href={`/${slug}/guide/`}
              className="group bg-white dark:bg-slate-800 rounded-xl p-4 shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-200 dark:border-slate-700"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">{config.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white truncate">
                    {city!.city}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {city!.country}
                  </p>
                </div>
              </div>

              {/* Timezone Info */}
              <div className="mb-3 p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                  {city!.timezone.replace('_', ' ')}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  UTC{config.utcOffset >= 0 ? '+' : ''}{config.utcOffset}
                </p>
              </div>

              {/* Guide Topics */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                    Business
                  </span>
                  <span className="text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                    Travel
                  </span>
                  <span className="text-xs px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                    Remote
                  </span>
                  <span className="text-xs px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">
                    Markets
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  10 pages
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            More city guides coming soon 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
