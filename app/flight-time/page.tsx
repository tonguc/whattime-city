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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: flightTimeSEO.content.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FlightTimeClient />
    </>
  )
}
