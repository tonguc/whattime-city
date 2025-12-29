import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import { parseCities, generateTopCityPairs } from '@/lib/meetingPlanner'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'
import DynamicContent from '@/components/meeting/DynamicContent'
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
      title: 'Meeting Planner | whattime.city',
      description: 'Find the best meeting time across time zones'
    }
  }

  // First 2 cities for title
  const city1 = cityList[0]
  const city2 = cityList[1]
  const cityNames = cityList.map(c => c.city).join(', ')
  
  return {
    title: `Best Meeting Time: ${cityNames} | whattime.city`,
    description: `Find perfect meeting time between ${cityNames}. Compare business hours and schedule calls across time zones.`,
    openGraph: {
      title: `Meeting Time: ${cityNames}`,
      description: `Find the best meeting time across time zones`,
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

  return (
    <>
      {/* TOOLS MINI NAV */}
      <ToolsMiniNav isLight={isLight} theme={theme} />

      {/* MAIN CONTENT - Header'dan sonra daha fazla boşluk */}
      <main className="container mx-auto px-4 pt-12 pb-16 max-w-6xl">
        {/* Interactive Tool */}
        <MeetingPlannerClient 
          initialCities={cityList}
          isLight={isLight}
          theme={theme}
        />

        {/* SEO Content - Client'tan sonra daha fazla boşluk */}
        {cityList.length >= 2 && (
          <div className="mt-16">
            <DynamicContent 
              city1={cityList[0]}
              city2={cityList[1]}
              isLight={isLight}
            />
          </div>
        )}
      </main>
    </>
  )
}
