'use client'

import Link from 'next/link'
import { getCityBySlug } from '@/lib/cities'
import { getCityDisplayConfig, getGuideCities } from '@/lib/cityDisplayConfig'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GuidesPage() {
  const { theme, isLight } = useCityContext()
  
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
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className={`text-3xl font-bold ${theme.text} mb-2`}>
            City Time Zone Guides
          </h1>
          <p className={`${theme.textMuted}`}>
            Complete guides for major world cities
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {guideCities.map(({ slug, city, config }) => (
            <Link
              key={slug}
              href={`/${slug}/guide/`}
              className={`group rounded-xl p-4 shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border ${theme.card}`}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">{config.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-bold ${theme.text} truncate`}>
                    {city!.city}
                  </h3>
                  <p className={`text-xs ${theme.textMuted} truncate`}>
                    {city!.country}
                  </p>
                </div>
              </div>

              {/* Timezone Info */}
              <div className={`mb-3 p-2 rounded ${isLight ? 'bg-slate-100' : 'bg-slate-800/50'}`}>
                <p className={`text-xs ${theme.text} font-medium truncate`}>
                  {city!.timezone.replace('_', ' ')}
                </p>
                <p className={`text-xs ${theme.textMuted}`}>
                  UTC{config.utcOffset >= 0 ? '+' : ''}{config.utcOffset}
                </p>
              </div>

              {/* Guide Topics */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/30 text-blue-300'}`}>
                    Business
                  </span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/30 text-green-300'}`}>
                    Travel
                  </span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isLight ? 'bg-purple-100 text-purple-700' : 'bg-purple-900/30 text-purple-300'}`}>
                    Remote
                  </span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isLight ? 'bg-orange-100 text-orange-700' : 'bg-orange-900/30 text-orange-300'}`}>
                    Markets
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className={`flex items-center justify-between pt-3 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <span className={`text-xs ${theme.textMuted}`}>
                  10 pages
                </span>
                <span className={`text-sm font-medium group-hover:translate-x-1 transition-transform ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${theme.textMuted}`}>
            More city guides coming soon 🚀
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
