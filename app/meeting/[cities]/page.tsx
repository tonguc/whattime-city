import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import { parseCities, generateTopCityPairs, getBusinessHoursOverlapCount } from '@/lib/meetingPlanner'
import MeetingPageContent from '@/components/meeting/MeetingPageContent'
import FAQSchema from '@/components/meeting/FAQSchema'

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

export default function MeetingCitiesPage({ params }: Props) {
  // Parse multiple cities
  const cityList = parseCities(params.cities)
  
  if (!cityList) {
    notFound()
  }

  return (
    <>
      {/* FAQ Schema for SEO */}
      {cityList.length >= 2 && (
        <FAQSchema city1={cityList[0]} city2={cityList[1]} />
      )}

      {/* Full Page Content with Header, Theme, Containers, Footer */}
      <MeetingPageContent initialCities={cityList} />
    </>
  )
}
