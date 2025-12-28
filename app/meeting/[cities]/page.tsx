import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import { parseCityPair, generateTopCityPairs } from '@/lib/meetingPlanner'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'
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
  const parsed = parseCityPair(params.cities)
  if (!parsed) {
    return {
      title: 'Meeting Planner | whattime.city',
      description: 'Find the best meeting time across time zones'
    }
  }

  const { city1, city2 } = parsed
  
  return {
    title: `Best Meeting Time: ${city1.city} & ${city2.city} | whattime.city`,
    description: `Find perfect meeting time between ${city1.city} (${city1.timezone}) and ${city2.city} (${city2.timezone}). Compare business hours and schedule calls across time zones.`,
    openGraph: {
      title: `Meeting Time: ${city1.city} ↔ ${city2.city}`,
      description: `Find the best meeting time across time zones`,
    }
  }
}

export default function MeetingPlannerPage({ params }: Props) {
  // Parse city pair
  const parsed = parseCityPair(params.cities)
  
  if (!parsed) {
    notFound()
  }

  const { city1, city2 } = parsed

  // Get theme based on first city's time
  const now = new Date()
  const timeOfDay = getTimeOfDay(
    now,
    city1.lat || 0,
    city1.lng || 0
  )
  
  const isLight = timeOfDay === 'day' || timeOfDay === 'dawn'
  
  // Theme colors
  const theme = {
    primary: isLight ? 'bg-blue-500' : 'bg-blue-600',
    secondary: isLight ? 'bg-slate-100' : 'bg-slate-800',
    text: isLight ? 'text-slate-900' : 'text-white',
    background: isLight ? 'bg-gradient-to-b from-blue-50 to-white' : 'bg-gradient-to-b from-slate-900 to-slate-800'
  }

  return (
    <>
      {/* HEADER */}
      <div className={`min-h-screen ${theme.background} transition-colors duration-1000`}>
        <ToolsMiniNav isLight={isLight} theme={theme} />

        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Interactive Tool */}
          <MeetingPlannerClient 
            initialCity1={city1}
            initialCity2={city2}
            isLight={isLight}
            theme={theme}
          />

          {/* SEO Content */}
          <DynamicContent 
            city1={city1}
            city2={city2}
            isLight={isLight}
          />
        </main>

        {/* FOOTER */}
        <Footer isLight={isLight} />
      </div>
    </>
  )
}
