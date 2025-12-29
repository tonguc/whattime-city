import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import { parseCities, generateTopCityPairs, getBusinessHoursOverlapCount } from '@/lib/meetingPlanner'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'
import DynamicContent from '@/components/meeting/DynamicContent'
import FAQSchema from '@/components/meeting/FAQSchema'
import RelatedTools from '@/components/meeting/RelatedTools'
import { getTimeOfDay } from '@/lib/sun-calculator'

interface Props {
  params: { cities: string }
}

// Generate static params for top city pairs
export async function generateStaticParams() {
  const topPairs = generateTopCityPairs() // Returns string[] like "istanbul-london"
  return topPairs.map(pairSlug => ({
    cities: pairSlug // Already normalized!
  }))
}

// ISR: Revalidate every 30 days
export const revalidate = 60 * 60 * 24 * 30
export const dynamicParams = true

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityList = parseCities(params.cities)
  if (!cityList) {
    return {
      title: 'Meeting Planner: Find Best Time to Call Across Time Zones | whattime.city',
      description: 'Schedule meetings across time zones. Find business hours overlap and best time to call with our time zone converter.'
    }
  }

  // Single city (1 şehir)
  if (cityList.length === 1) {
    const city = cityList[0]
    return {
      title: `Best Time to Call ${city.city}: Current Time & Business Hours | whattime.city`,
      description: `Check current time in ${city.city} (${city.timezone}). Find best time to call ${city.city} considering business hours (9 AM - 5 PM local time).`,
      keywords: `${city.city} time, current time ${city.city}, best time to call ${city.city}, ${city.city} business hours, ${city.timezone}`,
      alternates: {
        canonical: `/meeting/${city.slug}`
      },
      openGraph: {
        title: `Best Time to Call ${city.city}`,
        description: `Current time and business hours in ${city.city}`,
        type: 'website'
      }
    }
  }

  // Multiple cities (2+ şehir)
  const cityNames = cityList.map(c => c.city)
  const cityNamesText = cityNames.join(', ').replace(/, ([^,]*)$/, ' & $1')
  const citySlugs = cityList.map(c => c.slug).sort().join('-vs-')
  
  return {
    title: `Best Time to Call ${cityNamesText}: Business Hours Overlap | whattime.city`,
    description: `Find the best meeting time between ${cityNamesText}. Compare business hours, calculate time differences, and schedule calls across time zones with working hours overlap.`,
    keywords: `time zone converter, ${cityNamesText} time difference, best time to call, business hours overlap, meeting planner, schedule across time zones`,
    alternates: {
      canonical: `/meeting/${citySlugs}`
    },
    openGraph: {
      title: `Meeting Planner: ${cityNamesText} Time Zone Comparison`,
      description: `Find business hours overlap and best time to schedule calls between ${cityNamesText}`,
      type: 'website'
    }
  }
}

export default function MeetingPlannerPage({ params }: Props) {
  // Parse multiple cities
  const cityList = parseCities(params.cities)
  
  if (!cityList) {
    notFound()
  }

  // Use first city for theme calculation
  const firstCity = cityList[0]

  // Get theme based on first city's time
  const now = new Date()
  const timeOfDay = getTimeOfDay(
    now,
    firstCity.lat || 0,
    firstCity.lng || 0
  )
  
  const isLight = timeOfDay === 'day' || timeOfDay === 'dawn'
  
  // Theme colors for ToolsMiniNav
  const theme = {
    accentBg: isLight ? 'bg-blue-500' : 'bg-blue-600',
    accentBgLight: isLight ? 'bg-blue-100' : 'bg-blue-900',
    accentText: isLight ? 'text-blue-600' : 'text-blue-400',
    accentBorder: isLight ? 'border-blue-200' : 'border-blue-800'
  }

  // Calculate overlap count for SSR (SEO)
  const overlapCount = cityList.length >= 2 
    ? getBusinessHoursOverlapCount(cityList[0], cityList[1])
    : 0

  return (
    <>
      {/* FAQ Schema for SEO */}
      {cityList.length >= 2 && (
        <FAQSchema city1={cityList[0]} city2={cityList[1]} />
      )}

      {/* TOOLS MINI NAV */}
      <ToolsMiniNav isLight={isLight} theme={theme} />

      {/* MAIN CONTENT - /tools/meeting-planner ile aynı spacing */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Interactive Tool */}
        <MeetingPlannerClient 
          initialCities={cityList}
          isLight={isLight}
          theme={theme}
        />

        {/* SEO Content - Box içinde - Only for 2+ cities */}
        {cityList.length >= 2 && (
          <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${
            isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
          }`}>
            <DynamicContent 
              city1={cityList[0]}
              city2={cityList[1]}
              isLight={isLight}
              overlapCount={overlapCount}
            />
            
            {/* Related Tools - Inside DynamicContent box (at the bottom) */}
            <div className={`mt-12 pt-8 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
              <RelatedTools isLight={isLight} />
            </div>
          </div>
        )}

        {/* Single City Info - Box içinde - Only for 1 city */}
        {cityList.length === 1 && (
          <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${
            isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
          }`}>
            <div className={`prose max-w-none ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              <h2 className={`text-2xl font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Current Time in {cityList[0].city}
              </h2>
              <p className="text-lg mb-4">
                <strong className={isLight ? 'text-slate-900' : 'text-white'}>
                  Timezone: </strong>{cityList[0].timezone}
              </p>
              <p className="mb-4">
                <strong className={isLight ? 'text-slate-900' : 'text-white'}>
                  Business Hours: </strong>9:00 AM - 5:00 PM local time
              </p>
              <div className={`p-4 rounded-lg mt-6 ${
                isLight 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-blue-900/20 border border-blue-800/50'
              }`}>
                <p className={`text-sm ${isLight ? 'text-blue-700' : 'text-blue-300'}`}>
                  <strong>💡 Tip:</strong> Add a second city to compare time zones and find the best meeting time!
                </p>
              </div>
            </div>

            {/* Related Tools - Inside Single City box (at the bottom) */}
            <div className={`mt-12 pt-8 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
              <RelatedTools isLight={isLight} />
            </div>
          </div>
        )}
      </main>
    </>
  )
}
