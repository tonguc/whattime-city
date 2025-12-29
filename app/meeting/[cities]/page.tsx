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

  // City names for meta
  const cityNames = cityList.map(c => c.city)
  const cityNamesText = cityNames.join(', ').replace(/, ([^,]*)$/, ' & $1')
  
  return {
    title: `Best Time to Call ${cityNamesText}: Business Hours Overlap | whattime.city`,
    description: `Find the best meeting time between ${cityNamesText}. Compare business hours, calculate time differences, and schedule calls across time zones with working hours overlap.`,
    keywords: `time zone converter, ${cityNamesText} time difference, best time to call, business hours overlap, meeting planner, schedule across time zones`,
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

        {/* SEO Content - Box içinde */}
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
          </div>
        )}

        {/* Related Tools - Box içinde */}
        <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <RelatedTools isLight={isLight} />
        </div>
      </main>
    </>
  )
}
