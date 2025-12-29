import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import { parseCityPair, generateTopCityPairs } from '@/lib/meetingPlanner'
import Header from '@/components/Header'
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
  
  // Background gradient (ana sayfa ile uyumlu)
  const bgGradient = (() => {
    switch (timeOfDay) {
      case 'dawn':
        return 'from-orange-100 via-yellow-50 to-blue-50'
      case 'day':
        return 'from-blue-100 via-cyan-50 to-indigo-50'
      case 'dusk':
        return 'from-purple-200 via-pink-100 to-orange-100'
      case 'night':
        return 'from-slate-900 via-blue-950 to-indigo-950'
      default:
        return 'from-blue-100 via-cyan-50 to-indigo-50'
    }
  })()
  
  // Theme colors for ToolsMiniNav
  const theme = {
    accentBg: isLight ? 'bg-blue-500' : 'bg-blue-600',
    accentBgLight: isLight ? 'bg-blue-100' : 'bg-blue-900',
    accentText: isLight ? 'text-blue-600' : 'text-blue-400',
    accentBorder: isLight ? 'border-blue-200' : 'border-blue-800'
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient} transition-colors duration-1000`}>
      {/* MAIN HEADER */}
      <Header isLight={isLight} />
      
      {/* TOOLS MINI NAV */}
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
  )
}
