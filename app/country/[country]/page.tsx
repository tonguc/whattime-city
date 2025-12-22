import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCountryBySlug, getAllCountrySlugs, getCitiesByCountryCode } from '@/lib/cities'
import CountryPageWrapper from '@/components/CountryPageWrapper'

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
  
  const cities = getCitiesByCountryCode(country.code)
  const cityNames = cities.slice(0, 5).map(c => c.city).join(', ')
  
  // Keep title under 60 characters for SEO
  const title = `Time in ${country.name} - Time Zones | whattime.city`
  const description = `What time is it in ${country.name} right now? Check current local time in ${country.capital}${cityNames ? `, ${cityNames}` : ''} and all ${country.name} time zones. ${country.timezones[0]}. Population: ${country.population}. Currency: ${country.currency} (${country.currencySymbol}). Phone code: ${country.phoneCode}.`
  
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
      `${country.name} local time`,
      `${country.name} clock`,
      `time difference ${country.name}`,
      ...country.timezones.map(tz => `${country.name} ${tz}`),
      ...cities.slice(0, 5).map(c => `time in ${c.city}`),
      `${country.name} business hours`,
      `call ${country.name} best time`
    ],
    openGraph: {
      title: `Current Time in ${country.name} - Time Zones & Cities`,
      description: `Live local time in ${country.name}. Time zones: ${country.timezones.slice(0, 3).join(', ')}. Capital: ${country.capital}. Check time in ${cityNames || 'all cities'}.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `https://whattime.city/country/${slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Time in ${country.name} Now | whattime.city`,
      description: `Current time in ${country.capital} and all ${country.name} cities. ${country.timezones[0]}.`
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
  const seo = country.seo
  
  // Generate dynamic SEO content if not provided
  const businessHours = seo?.businessHours || `Standard business hours in ${country.name} are typically 9:00 AM to 5:00 PM or 6:00 PM local time, Monday through Friday. Government offices and banks may have shorter hours. Many businesses close for lunch, especially in Southern European, Latin American, and Asian countries.`
  
  const bestTimeToCall = seo?.bestTimeToCall || generateBestTimeToCall(country)
  const dstInfo = seo?.dstInfo || generateDstInfo(country)
  const travelTips = seo?.travelTips || generateTravelTips(country)
  const funFacts = seo?.funFacts || generateFunFacts(country)
  
  return (
    <CountryPageWrapper>
      {/* Page Title */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Current Time in {country.name}
        </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Check local time in {country.capital} and all {country.name} cities. {country.timezones.length > 1 
              ? `${country.name} spans ${country.timezones.length} time zones.` 
              : `${country.name} uses ${country.timezones[0]}.`}
          </p>
        </header>
        
        {/* Quick Facts */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">{country.name} Quick Facts</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">🏛️ Capital City</div>
              <div className="text-lg font-semibold text-white">{country.capital}</div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">👥 Population</div>
              <div className="text-lg font-semibold text-white">{country.population}</div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">💰 Currency</div>
              <div className="text-lg font-semibold text-white">{country.currencySymbol} {country.currency}</div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-xs text-slate-400 mb-1">📞 Phone Code</div>
              <div className="text-lg font-semibold text-white">{country.phoneCode}</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-xl bg-slate-800/50">
            <div className="text-xs text-slate-400 mb-2">🗣️ Official Languages</div>
            <div className="flex flex-wrap gap-2">
              {country.languages.map((lang, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm bg-slate-700/60 text-slate-200">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Time Zones Section */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">🕐 Time Zones in {country.name}</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {country.timezones.map((tz, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {tz}
              </span>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              {country.description}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {dstInfo}
            </p>
          </div>
        </section>
        
        {/* Cities Grid */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            🏙️ Major Cities in {country.name} {cities.length > 0 && `(${cities.length} cities)`}
          </h2>
          
          {cities.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
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
              <p className="text-sm text-slate-400">
                Click on any city to see detailed local time, sunrise/sunset times, and weather information.
              </p>
            </>
          ) : (
            <p className="text-slate-400">
              Detailed city information coming soon. Use our search to find specific cities in {country.name}.
            </p>
          )}
        </section>
        
        {/* Best Time to Call */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">📞 Best Time to Call {country.name}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              {bestTimeToCall}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {businessHours}
            </p>
          </div>
        </section>
        
        {/* Travel Tips */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">✈️ Time-Related Travel Tips for {country.name}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed">
              {travelTips}
            </p>
          </div>
        </section>
        
        {/* Fun Facts */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">🎯 Interesting Facts About Time in {country.name}</h2>
          <ul className="space-y-3">
            {funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </section>
        
        {/* About Section - Extra SEO Content */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            About Time in {country.name}
          </h2>
          
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-slate-300 leading-relaxed">
              {country.name} {country.timezones.length > 1 
                ? `spans ${country.timezones.length} time zones, from ${country.timezones[0]} to ${country.timezones[country.timezones.length - 1]}` 
                : `uses a single time zone (${country.timezones[0]})`}. 
              {country.timezones.length > 3 
                ? ` This makes ${country.name} one of the countries with the most time zones in the world, which can make scheduling calls and meetings more complex.` 
                : ` This makes it relatively straightforward to coordinate times across the country.`}
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              The capital city {country.capital} serves as the political and often economic center of {country.name}. 
              {cities.length > 0 
                ? ` Major business activities are spread across cities including ${cities.slice(0, 4).map(c => c.city).join(', ')}${cities.length > 4 ? ` and ${cities.length - 4} more` : ''}.` 
                : ` Various cities across the country serve as regional business hubs.`}
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              When planning international calls, video conferences, or business meetings with contacts in {country.name}, 
              it's important to consider the time zone difference. {country.timezones[0]} is the most commonly referenced 
              time zone for {country.name}.
              {country.timezones.length > 1 && ` However, depending on the specific location, you may need to account for ${country.timezones.slice(1).join(' or ')}.`}
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              {country.name} uses the {country.currency} ({country.currencySymbol}) as its official currency. 
              The international dialing code is {country.phoneCode}. 
              {country.languages.length > 1 
                ? `Multiple languages are spoken, including ${country.languages.join(', ')}.` 
                : `The official language is ${country.languages[0]}.`}
            </p>
          </div>
        </section>
        
        {/* Related Countries */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            🌍 Other Countries in {country.continent.charAt(0).toUpperCase() + country.continent.slice(1)}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {getAllCountrySlugs()
              .map(s => getCountryBySlug(s)!)
              .filter(c => c.continent === country.continent && c.code !== country.code)
              .slice(0, 12)
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
        </section>
        
        {/* FAQ Schema-ready Section */}
        <section className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Frequently Asked Questions About Time in {country.name}
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-800/30">
              <h3 className="font-medium text-white mb-2">What time zone is {country.name} in?</h3>
              <p className="text-slate-300 text-sm">
                {country.name} {country.timezones.length > 1 
                  ? `spans ${country.timezones.length} time zones: ${country.timezones.join(', ')}` 
                  : `uses ${country.timezones[0]}`}. 
                The capital {country.capital} uses {country.timezones[0]}.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/30">
              <h3 className="font-medium text-white mb-2">Does {country.name} observe Daylight Saving Time?</h3>
              <p className="text-slate-300 text-sm">
                {dstInfo}
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/30">
              <h3 className="font-medium text-white mb-2">What is the best time to call {country.name} from the US?</h3>
              <p className="text-slate-300 text-sm">
                {bestTimeToCall}
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-800/30">
              <h3 className="font-medium text-white mb-2">What are typical business hours in {country.name}?</h3>
              <p className="text-slate-300 text-sm">
                {businessHours}
              </p>
            </div>
          </div>
        </section>
    </CountryPageWrapper>
  )
}

// Helper functions to generate dynamic content
function generateBestTimeToCall(country: { name: string; timezones: string[]; continent: string }): string {
  const tz = country.timezones[0]
  
  if (country.continent === 'europe') {
    return `To call ${country.name} from the United States, the best time is between 8:00 AM and 10:00 AM EST, which corresponds to 2:00 PM - 4:00 PM in ${country.name}. For UK callers, ${country.name} is typically 1 hour ahead (or the same time during summer months). Early morning or late afternoon calls work best for most European schedules.`
  } else if (country.continent === 'asia') {
    return `Calling ${country.name} from the US requires careful planning due to the significant time difference. If you're on the East Coast (EST), try calling between 8:00 PM and 10:00 PM, which will be morning time in ${country.name}. West Coast callers (PST) can call between 5:00 PM and 7:00 PM. For UK callers, early morning calls work best.`
  } else if (country.continent === 'americas') {
    return `${country.name} shares similar time zones with many North American locations, making scheduling calls relatively convenient. For European callers, afternoon calls (after 2:00 PM local time) will catch ${country.name} during their morning business hours.`
  } else if (country.continent === 'oceania') {
    return `Due to the significant time difference, calling ${country.name} from the US or Europe requires planning. US East Coast callers should try early evening (6:00 PM - 8:00 PM EST) to reach ${country.name} during their morning. European callers can try very early morning or late night calls.`
  } else {
    return `When calling ${country.name}, consider the time zone difference of ${tz}. Business hours are typically 9:00 AM to 5:00 PM local time. Use our time converter tool to find the optimal calling time from your location.`
  }
}

function generateDstInfo(country: { name: string; timezones: string[]; continent: string }): string {
  const noDstCountries = ['japan', 'china', 'india', 'singapore', 'thailand', 'vietnam', 'indonesia', 'malaysia', 'philippines', 'south-korea', 'taiwan', 'hong-kong', 'qatar', 'saudi-arabia', 'united-arab-emirates', 'argentina', 'brazil']
  const slug = country.name.toLowerCase().replace(/\s+/g, '-')
  
  if (noDstCountries.includes(slug)) {
    return `${country.name} does not observe Daylight Saving Time (DST). This means the time difference with countries that do observe DST (such as the US, UK, and most of Europe) will change twice a year when those countries adjust their clocks.`
  } else if (country.continent === 'europe') {
    return `${country.name} observes Daylight Saving Time (DST), known as Summer Time in Europe. Clocks spring forward one hour on the last Sunday of March and fall back on the last Sunday of October. During summer months, ${country.name} uses ${country.timezones.length > 1 ? country.timezones[1] : 'summer time'}.`
  } else if (country.continent === 'americas') {
    return `Most regions of ${country.name} observe Daylight Saving Time, typically from the second Sunday in March to the first Sunday in November. During DST, clocks move forward one hour. Some regions may have different rules, so verify the specific location.`
  } else if (country.continent === 'oceania') {
    return `${country.name} observes Daylight Saving Time during the Southern Hemisphere summer (October to April). Clocks move forward one hour during this period. Note that this is opposite to Northern Hemisphere DST schedules.`
  } else {
    return `Daylight Saving Time observance in ${country.name} varies. Check current local time using our tool to ensure accuracy, especially during spring and autumn when DST transitions typically occur.`
  }
}

function generateTravelTips(country: { name: string; timezones: string[]; continent: string; languages: string[] }): string {
  if (country.continent === 'asia') {
    return `When traveling to ${country.name}, expect significant jet lag if coming from Europe or the Americas. Allow 1-2 days to adjust to the time difference. Most ${country.name} hotels will have alarm clocks, but setting your phone to local time immediately upon arrival helps. ${country.languages.length > 1 ? `Multiple languages are spoken including ${country.languages.join(' and ')}.` : `The primary language is ${country.languages[0]}.`} Business meetings often start punctually, so account for traffic when planning.`
  } else if (country.continent === 'europe') {
    return `Traveling to ${country.name} from North America typically involves a 5-9 hour time difference. The jet lag is usually manageable within 1-2 days. European business culture values punctuality, so arrive on time for meetings. ${country.name} follows the 24-hour clock format in official contexts, though 12-hour format is also common in casual settings.`
  } else if (country.continent === 'americas') {
    return `${country.name} is well-connected with flights from major global hubs. Time zone differences within the Americas are generally manageable for business travel. Remember that ${country.languages.join(' and ')} ${country.languages.length > 1 ? 'are' : 'is'} the primary language${country.languages.length > 1 ? 's' : ''}. Business culture may include longer lunch breaks in some regions.`
  } else {
    return `When planning your trip to ${country.name}, factor in the time zone change and allow time to adjust. Local business hours, cultural customs around punctuality, and communication styles may differ from your home country. Download offline maps and translation apps before traveling.`
  }
}

function generateFunFacts(country: { name: string; timezones: string[]; continent: string; capital: string; population: string }): string[] {
  const facts = []
  
  if (country.timezones.length > 3) {
    facts.push(`${country.name} spans ${country.timezones.length} time zones, making it one of the widest countries in terms of time coverage.`)
  } else if (country.timezones.length === 1) {
    facts.push(`Despite its size, ${country.name} uses only one time zone, simplifying scheduling across the entire country.`)
  }
  
  facts.push(`The capital ${country.capital} is the political center of ${country.name} with a total national population of ${country.population}.`)
  
  if (country.continent === 'asia') {
    facts.push(`Many Asian countries, including ${country.name}, historically based their time zones on Beijing or Tokyo time during different periods.`)
  } else if (country.continent === 'europe') {
    facts.push(`${country.name} follows Central European Time conventions, making business coordination with other EU countries straightforward.`)
  }
  
  facts.push(`Time zone boundaries don't always follow geographical lines - they're often adjusted for political, economic, or practical reasons.`)
  
  facts.push(`The concept of standardized time zones was developed in the 19th century with the expansion of railways, replacing local solar time.`)
  
  return facts
}
