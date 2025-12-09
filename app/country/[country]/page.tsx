import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCountryBySlug, getAllCountrySlugs, getCitiesByCountryCode } from '@/lib/cities'

interface CountryPageProps {
  params: Promise<{ country: string }>
}

// Generate static pages for all countries
export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({
    country: slug,
  }))
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { country: slug } = await params
  const country = getCountryBySlug(slug)
  
  if (!country) {
    return { title: 'Country Not Found - whattime.city' }
  }
  
  const title = `Current Time in ${country.name} - All Time Zones & Cities | whattime.city`
  const description = `What time is it in ${country.name}? Check current local time in all ${country.name} cities and time zones. ${country.timezones.join(', ')}. Population: ${country.population}. Currency: ${country.currency} (${country.currencySymbol}).`
  
  return {
    title,
    description,
    keywords: [
      `time in ${country.name}`,
      `${country.name} time now`,
      `${country.name} time zones`,
      `${country.name} current time`,
      `what time is it in ${country.name}`,
      `${country.capital} time`,
      ...country.timezones.map(tz => `${country.name} ${tz}`),
      `${country.name} cities time`
    ],
    openGraph: {
      title: `Current Time in ${country.name} - Time Zones & Cities`,
      description: `Live local time in ${country.name}. Time zones: ${country.timezones.slice(0, 3).join(', ')}. Capital: ${country.capital}.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `https://whattime.city/country/${slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Time in ${country.name} Now | whattime.city`,
      description: `Current time in all ${country.name} cities and time zones.`
    },
    alternates: {
      canonical: `https://whattime.city/country/${slug}`
    }
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country: slug } = await params
  const country = getCountryBySlug(slug)
  
  if (!country) {
    notFound()
  }
  
  const cities = getCitiesByCountryCode(country.code)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to World Clock
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Time in {country.name}
          </h1>
          <p className="text-xl text-slate-400">
            Current local time in all {country.name} cities and time zones
          </p>
        </header>
        
        {/* Quick Facts */}
        <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Facts</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">🏛️ Capital</div>
              <div className="text-lg font-semibold text-white">{country.capital}</div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">👥 Population</div>
              <div className="text-lg font-semibold text-white">{country.population}</div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">💰 Currency</div>
              <div className="text-lg font-semibold text-white">{country.currencySymbol}</div>
              <div className="text-xs text-slate-400">{country.currency}</div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">📞 Phone Code</div>
              <div className="text-lg font-semibold text-white">{country.phoneCode}</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-xl bg-slate-800/50">
            <div className="text-xs text-slate-400 mb-1">🗣️ Languages</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {country.languages.map((lang, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm bg-slate-700/60 text-slate-200">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Time Zones */}
        <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">🕐 Time Zones in {country.name}</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {country.timezones.map((tz, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {tz}
              </span>
            ))}
          </div>
          
          <p className="text-slate-300 leading-relaxed">
            {country.description}
          </p>
        </div>
        
        {/* Cities */}
        <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            🏙️ Cities in {country.name} ({cities.length})
          </h2>
          
          {cities.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all hover:scale-105 group"
                >
                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {city.city}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {city.timezone.split('/').pop()?.replace('_', ' ')}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">
              No cities available yet. Check back soon!
            </p>
          )}
        </div>
        
        {/* SEO Content */}
        <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            About Time in {country.name}
          </h2>
          
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              {country.name} {country.timezones.length > 1 
                ? `spans ${country.timezones.length} time zones` 
                : 'uses a single time zone'}, making it {country.timezones.length > 3 
                  ? 'one of the countries with the most time zones in the world' 
                  : 'easy to coordinate times across the country'}.
            </p>
            
            <p className="text-slate-300 leading-relaxed mb-4">
              The capital city {country.capital} is the political center, while major business 
              activities are spread across {cities.length > 0 
                ? `cities like ${cities.slice(0, 3).map(c => c.city).join(', ')}` 
                : 'various cities'}.
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              When planning calls or meetings with {country.name}, consider the time zone 
              difference. {country.timezones[0]} is the most commonly referenced time zone.
              {country.timezones.length > 1 && ` However, different regions may use ${country.timezones.slice(1).join(' or ')}.`}
            </p>
          </div>
        </div>
        
        {/* Related Countries */}
        <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-white mb-4">
            🌍 Other Countries in {country.continent.charAt(0).toUpperCase() + country.continent.slice(1)}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {getAllCountrySlugs()
              .map(s => getCountryBySlug(s)!)
              .filter(c => c.continent === country.continent && c.code !== country.code)
              .slice(0, 10)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/country/${c.slug}`}
                  className="px-4 py-2 rounded-full text-sm bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400 transition-all"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} whattime.city - World Clock & Time Zones</p>
        </footer>
      </div>
    </div>
  )
}
