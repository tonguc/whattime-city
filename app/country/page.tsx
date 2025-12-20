import { Metadata } from 'next'
import Link from 'next/link'
import { countries } from '@/lib/cities'
import SimpleHeader from '@/components/SimpleHeader'

export const metadata: Metadata = {
  title: 'Time Zones by Country - All Countries List | whattime.city',
  description: 'Browse time zones for 80+ countries worldwide. Find current local time, daylight saving info, and timezone details for any country.',
  keywords: ['time zones by country', 'world time zones', 'countries time zones', 'international time zones', 'country time list'],
  openGraph: {
    title: 'Time Zones by Country - World Time Zone Guide',
    description: 'Complete list of countries and their time zones. Find current time anywhere in the world.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/country'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Zones by Country | whattime.city',
    description: 'Browse time zones for 80+ countries worldwide.'
  },
  alternates: {
    canonical: 'https://whattime.city/country'
  }
}

// Group countries by continent
function getCountriesByContinent() {
  const continents: Record<string, typeof countries> = {
    americas: [],
    europe: [],
    asia: [],
    africa: [],
    oceania: []
  }
  
  countries.forEach(country => {
    if (continents[country.continent]) {
      continents[country.continent].push(country)
    }
  })
  
  // Sort each continent alphabetically
  Object.keys(continents).forEach(key => {
    continents[key].sort((a, b) => a.name.localeCompare(b.name))
  })
  
  return continents
}

const continentInfo: Record<string, { name: string; emoji: string }> = {
  americas: { name: 'Americas', emoji: '🌎' },
  europe: { name: 'Europe', emoji: '🌍' },
  asia: { name: 'Asia', emoji: '🌏' },
  africa: { name: 'Africa', emoji: '🌍' },
  oceania: { name: 'Oceania', emoji: '🌏' }
}

export default function CountriesPage() {
  const countriesByContinent = getCountriesByContinent()
  const totalCountries = countries.length
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SimpleHeader isLight={false} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            🌐 Time Zones by Country
          </h1>
          <p className="text-slate-400 text-lg">
            Browse {totalCountries} countries across all continents
          </p>
        </div>

        {/* Continent Sections */}
        <div className="space-y-10">
          {Object.entries(continentInfo).map(([key, info]) => {
            const continentCountries = countriesByContinent[key]
            if (!continentCountries || continentCountries.length === 0) return null
            
            return (
              <section key={key}>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>{info.emoji}</span>
                  <span>{info.name}</span>
                  <span className="text-sm font-normal text-slate-500">({continentCountries.length})</span>
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {continentCountries.map(country => {
                    return (
                      <Link
                        key={country.slug}
                        href={`/country/${country.slug}`}
                        className="group p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300 font-mono font-medium">
                            {country.code.toUpperCase()}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-white font-medium truncate group-hover:text-cyan-400 transition-colors">
                              {country.name}
                            </div>
                            <div className="text-xs text-slate-400 truncate">
                              {country.timezones[0]}
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Can't find your country? Try searching for a city instead.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
          >
            🔍 Search Cities
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} whattime.city - World Clock & Time Zones</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
