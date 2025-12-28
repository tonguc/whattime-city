/**
 * Meeting Planner Dynamic Page
 * /meeting/[cities]/ - City pair specific meeting planner
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'
import DynamicContent from '@/components/meeting/DynamicContent'
import { 
  parseCityPair, 
  getCanonicalUrl, 
  generateTopCityPairs,
  calculateTimeDifference
} from '@/lib/meetingPlanner'

type Props = {
  params: { cities: string }
}

// ===== STATIC PARAMS GENERATION (TOP 1000 PAIRS) =====
export async function generateStaticParams() {
  const topPairs = generateTopCityPairs(1225) // 50 cities = 1,225 pairs
  
  console.log(`📊 Generating ${topPairs.length} static meeting pages`)
  
  return topPairs.map(pair => ({
    cities: pair
  }))
}

// ===== METADATA GENERATION =====
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityPair = parseCityPair(params.cities)
  
  if (!cityPair) {
    return {
      title: 'Meeting Planner - WhatTime.City',
      description: 'Find the best meeting time across multiple time zones'
    }
  }

  const { city1, city2 } = cityPair
  const timeDiff = calculateTimeDifference(city1, city2)
  const canonicalUrl = getCanonicalUrl(city1, city2)
  
  const title = `Best Meeting Time: ${city1.city} & ${city2.city} | Time Zone Scheduler`
  const description = `Find the perfect meeting time between ${city1.city} (${city1.timezone}) and ${city2.city} (${city2.timezone}). ${city1.city} is ${timeDiff.hours}h ${timeDiff.minutes}m ${timeDiff.direction} of ${city2.city}. Compare business hours and schedule calls across time zones.`
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://whattime.city${canonicalUrl}`
    },
    openGraph: {
      title,
      description,
      url: `https://whattime.city${canonicalUrl}`,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

// ===== ISR CONFIGURATION =====
export const revalidate = 60 * 60 * 24 * 30 // 30 days
export const dynamicParams = true // Allow on-demand generation for non-pre-rendered pairs

// ===== MAIN COMPONENT =====
export default async function MeetingPage({ params }: Props) {
  const cityPair = parseCityPair(params.cities)

  if (!cityPair) {
    notFound()
  }

  const { city1, city2 } = cityPair

  return (
    <>
      {/* Client Component - Interactive Tool */}
      <MeetingPlannerClient 
        initialCity1={city1}
        initialCity2={city2}
      />

      {/* Server Component - SEO Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <DynamicContent city1={city1} city2={city2} />
      </section>
    </>
  )
}
