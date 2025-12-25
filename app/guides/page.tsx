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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🌍 City Time Zone Guides
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">
            Complete guides for major world cities
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Business hours, stock markets, best time to visit, remote work tips, holidays, and local insights
          </p>
        </div>
      </div>

      {/* City Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideCities.map(({ slug, city, config }) => (
            <Link
              key={slug}
              href={`/${slug}/guide/`}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-200 dark:border-slate-700"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">{config.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {city!.city}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {city!.country}
                  </p>
                </div>
              </div>

              {/* Timezone Info */}
              <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {city!.timezone.replace('_', ' ')}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  UTC{config.utcOffset >= 0 ? '+' : ''}{config.utcOffset}
                </p>
              </div>

              {/* Guide Topics */}
              <div className="space-y-2 mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                    Business Hours
                  </span>
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                    Best Time to Visit
                  </span>
                  <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                    Remote Work
                  </span>
                  <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">
                    Stock Market
                  </span>
                  <span className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded">
                    Holidays
                  </span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
                    +5 more
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  10 comprehensive pages
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section (Optional) */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            More city guides coming soon! 🚀
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Why Use Our City Time Zone Guides?
          </h2>
          
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Planning international calls? Scheduling remote meetings? Traveling to a new city? 
              Our comprehensive time zone guides provide everything you need to navigate time differences 
              with confidence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  💼 Business Hours
                </h3>
                <p className="text-sm">
                  Banks, stores, restaurants, and office hours for each city
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  ☀️ Best Time to Visit
                </h3>
                <p className="text-sm">
                  Weather, crowds, and prices by month
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  💻 Remote Work
                </h3>
                <p className="text-sm">
                  Time zone overlap and meeting planning tips
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  📈 Stock Markets
                </h3>
                <p className="text-sm">
                  Trading hours for NYSE, LSE, TSE, ASX and more
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  📅 Public Holidays
                </h3>
                <p className="text-sm">
                  Complete holiday calendars and what's closed
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  🎒 Digital Nomad
                </h3>
                <p className="text-sm">
                  Coworking spaces, costs, and visa information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
