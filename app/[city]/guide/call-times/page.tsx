import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import CallTimesContent from './CallTimesContent'
import LondonCallTimesContent from './LondonCallTimesContent'
import TokyoCallTimesContent from './TokyoCallTimesContent'
import DubaiCallTimesContent from './DubaiCallTimesContent'
import SingaporeCallTimesContent from './SingaporeCallTimesContent'
import ParisCallTimesContent from './ParisCallTimesContent'
import SydneyCallTimesContent from './SydneyCallTimesContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return [
    { city: 'new-york' }, 
    { city: 'london' }, 
    { city: 'tokyo' }, 
    { city: 'dubai' }, 
    { city: 'singapore' }, 
    { city: 'paris' }, 
    { city: 'sydney' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Best Time to Call' }
  return {
    title: config.pages.callTimes.title,
    description: config.pages.callTimes.description,
    keywords: config.pages.callTimes.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/call-times/` },
  }
}

export default async function CallTimesPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  
  // ✅ SCHEMA - SADECE LONDON İÇİN
  const jsonLdFAQ = citySlug === 'london' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to call London from New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time for business calls is between 9:00 AM and 12:00 PM EST, which corresponds to 2:00 PM to 5:00 PM in London. This creates a 3-hour overlap during standard working hours."
        }
      },
      {
        "@type": "Question",
        "name": "How many hours is London ahead of New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "London is typically 5 hours ahead of New York. However, this gap briefly changes to 4 hours during DST transition weeks in March and October."
        }
      },
      {
        "@type": "Question",
        "name": "When should I avoid calling London from New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid calling after 5:00 PM EST (10:00 PM London) for personal calls, and after 12:00 PM EST (5:00 PM London) for business calls."
        }
      }
    ]
  } : null

  const jsonLdHowTo = citySlug === 'london' ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Find the Best Time to Call London from New York",
    "description": "Step-by-step guide to finding the optimal calling time from NYC to London",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check the time difference",
        "text": "London is 5 hours ahead of New York (4 hours during DST transition weeks).",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Identify business hours",
        "text": "London business hours are 9 AM - 5:30 PM GMT/BST. NYC business hours are 9 AM - 5 PM EST.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Find the overlap window",
        "text": "The optimal overlap for business calls is 9 AM - 12 PM EST (2 PM - 5 PM London time).",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Schedule your call",
        "text": "Book calls during the overlap window. For personal calls, you can extend until 5 PM EST (10 PM London).",
        "position": 4
      }
    ]
  } : null
  
  // LONDON CONTENT + SCHEMA
  if (citySlug === 'london') {
    return (
      <>
        {jsonLdFAQ && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
          />
        )}
        {jsonLdHowTo && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
          />
        )}
        <LondonCallTimesContent city={city as any} />
      </>
    )
  }
  
  // DİĞER ŞEHİRLER - SCHEMA YOK
  if (citySlug === 'tokyo') return <TokyoCallTimesContent city={city as any} />
  if (citySlug === 'dubai') return <DubaiCallTimesContent city={city as any} />
  if (citySlug === 'singapore') return <SingaporeCallTimesContent city={city as any} />
  if (citySlug === 'paris') return <ParisCallTimesContent city={city as any} />
  if (citySlug === 'sydney') return <SydneyCallTimesContent city={city as any} />
  
  return <CallTimesContent city={city as any} />
}
