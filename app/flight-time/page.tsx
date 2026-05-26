import type { Metadata } from 'next'
import { flightTimeSEO } from '@/data/seo/flight-time-seo'
import FlightTimeClient from './FlightTimeClient'

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = flightTimeSEO
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: metadata.canonical },
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: metadata.openGraph.url,
      type: 'website',
    },
  }
}

export default function FlightTimePage() {
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Flight Time Calculator',
    url: 'https://whattime.city/flight-time/',
    description: 'Calculate your exact arrival time in local time when crossing time zones. Enter departure city, arrival city, and flight duration.',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Calculate local arrival time across time zones',
      'Automatic Daylight Saving Time adjustment',
      'IANA Time Zone Database accuracy',
      'Supports 400+ cities worldwide',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: flightTimeSEO.content.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Flight Time Calculator', item: 'https://whattime.city/flight-time/' },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Local Arrival Time for an International Flight',
    description: 'Determine your exact local arrival time when crossing time zones, with automatic DST adjustment from the IANA tz database.',
    totalTime: 'PT1M',
    tool: [{ '@type': 'HowToTool', name: 'Flight Time Calculator (whattime.city)' }],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Enter your departure city',
        text: 'Select the city you are flying from. The calculator looks up its IANA time zone (e.g. America/New_York for JFK) and current UTC offset, including any active DST.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Enter your arrival city',
        text: 'Select the destination city. Its time zone and current UTC offset are also resolved automatically — including unusual offsets like Mumbai (UTC+5:30) or Kathmandu (UTC+5:45).',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Enter departure time in local time',
        text: 'Use the local departure time as shown on your boarding pass — do not pre-adjust for any time zone. The calculator handles the conversion.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Enter flight duration in hours and minutes',
        text: 'Use the flight duration from your booking confirmation or airline website — the wheels-up to wheels-down time, not gate-to-gate.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Read your local arrival time',
        text: 'The result shows the exact local time at your destination — including any "+1 day" or "+2 days" indicator if the flight crosses midnight or the International Date Line.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FlightTimeClient />
    </>
  )
}
