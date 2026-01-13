import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCountryBySlug, getAllCountrySlugs, getCitiesByCountryCode } from '@/lib/cities'
import CountryPageWrapper from '@/components/CountryPageWrapper'
import CountryPageContent from '@/components/CountryPageContent'

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
  
  // Generate dynamic SEO content
  const businessHours = seo?.businessHours || `Standard business hours in ${country.name} are typically 9:00 AM to 5:00 PM or 6:00 PM local time, Monday through Friday. Government offices and banks may have shorter hours. Many businesses close for lunch, especially in Southern European, Latin American, and Asian countries.`
  
  const bestTimeToCall = seo?.bestTimeToCall || generateBestTimeToCall(country)
  const dstInfo = seo?.dstInfo || generateDstInfo(country)
  const travelTips = seo?.travelTips || generateTravelTips(country)
  const funFacts = seo?.funFacts || generateFunFacts(country)
  
  // Get related countries
  const relatedCountries = getAllCountrySlugs()
    .map(s => getCountryBySlug(s)!)
    .filter(c => c.continent === country.continent && c.code !== country.code)
    .sort((a, b) => a.name.localeCompare(b.name))
  
  return (
    <CountryPageWrapper>
      <CountryPageContent 
        country={country}
        cities={cities}
        relatedCountries={relatedCountries}
        seoContent={{
          businessHours,
          bestTimeToCall,
          dstInfo,
          travelTips,
          funFacts
        }}
      />
    </CountryPageWrapper>
  )
}

// Helper functions
function generateBestTimeToCall(country: { name: string; timezones: string[]; continent: string }): string {
  if (country.continent === 'europe') {
    return `To call ${country.name} from the United States, the best time is between 8:00 AM and 10:00 AM EST, which corresponds to 2:00 PM - 4:00 PM in ${country.name}. For UK callers, ${country.name} is typically 1 hour ahead (or the same time during summer months). Early morning or late afternoon calls work best for most European schedules.`
  } else if (country.continent === 'asia') {
    return `Calling ${country.name} from the US requires careful planning due to the significant time difference. If you're on the East Coast (EST), try calling between 8:00 PM and 10:00 PM, which will be morning time in ${country.name}. West Coast callers (PST) can call between 5:00 PM and 7:00 PM. For UK callers, early morning calls work best.`
  } else if (country.continent === 'americas') {
    return `${country.name} shares similar time zones with many North American locations, making scheduling calls relatively convenient. For European callers, afternoon calls (after 2:00 PM local time) will catch ${country.name} during their morning business hours.`
  } else if (country.continent === 'oceania') {
    return `Due to the significant time difference, calling ${country.name} from the US or Europe requires planning. US East Coast callers should try early evening (6:00 PM - 8:00 PM EST) to reach ${country.name} during their morning. European callers can try very early morning or late night calls.`
  } else {
    return `When calling ${country.name}, consider the time zone difference of ${country.timezones[0]}. Business hours are typically 9:00 AM to 5:00 PM local time. Use our time converter tool to find the optimal calling time from your location.`
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
