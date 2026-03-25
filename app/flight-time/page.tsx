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
    url: 'https://whattime.city/flight-time',
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
      { '@type': 'ListItem', position: 2, name: 'Flight Arrival Time Calculator', item: 'https://whattime.city/flight-time/' },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FlightTimeClient />
    </>
  )
}
