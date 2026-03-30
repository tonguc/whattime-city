import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import SunriseSunsetClient from './SunriseSunsetClient'

export const metadata: Metadata = {
  title: 'Sunrise & Sunset Today — Sun Calculator',
  description:
    'What time does the sun set today? Find today\'s exact sunrise and sunset times for any city. Live sun calculator with dawn, dusk, solar noon, and daylight hours for 400+ cities worldwide.',
  keywords: [
    'what time does the sun set today',
    'what time sunsets today',
    'sunrise sunset times today',
    'what time is sunset today',
    'what time does sunrise happen',
    'sunset today',
    'sunrise today',
    'sunrise time',
    'sunset time',
    'sun calculator',
    'daylight hours today',
    'solar noon',
    'civil twilight',
    'dawn dusk times',
  ],
  alternates: { canonical: 'https://whattime.city/sunrise-sunset/' },
  openGraph: {
    title: 'Sunrise & Sunset Today — Sun Calculator',
    description:
      'What time does the sun set today? Live sunrise and sunset calculator for any city worldwide. Includes dawn, dusk, solar noon, and daylight hours.',
    type: 'website',
    url: 'https://whattime.city/sunrise-sunset/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunrise & Sunset Today — Sun Calculator',
    description:
      'What time does the sun set today? Live sunrise and sunset calculator for 400+ cities. Dawn, dusk, solar noon, and daylight duration.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What time is sunrise today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sunrise time depends on your location and the date. Use our calculator above to find the exact sunrise time for any city. For New York, sunrise typically ranges from around 7:20 AM in January to 5:25 AM in mid-June.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time does the sun set today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sunset time varies by location and date. Select your city in the calculator above to see today\'s sunset time. In New York, sunset ranges from around 4:28 PM in December to 8:31 PM in late June.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of daylight are there today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daylight hours vary by location and season. At the equator, daylight is nearly constant at 12 hours year-round. In New York, daylight ranges from about 9 hours 15 minutes at the winter solstice to 15 hours 5 minutes at the summer solstice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is solar noon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar noon is the moment when the sun reaches its highest point in the sky for the day. It is not always at 12:00 PM clock time — it depends on your exact longitude within your time zone and whether Daylight Saving Time is in effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is civil twilight (dawn and dusk)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Civil twilight (dawn and dusk) is the period when the sun is between 0° and 6° below the horizon. During civil twilight there is enough natural light for most outdoor activities without artificial lighting. Dawn is civil twilight before sunrise; dusk is civil twilight after sunset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do sunrise and sunset times change every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, sunrise and sunset times shift by 1–3 minutes daily as Earth orbits the Sun. The change is fastest around the spring and autumn equinoxes, and slowest near the solstices. Over the course of a year the total shift from shortest to longest day can exceed 6 hours at mid-latitudes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://whattime.city/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sunrise & Sunset Calculator',
      item: 'https://whattime.city/sunrise-sunset/',
    },
  ],
}

export default function SunriseSunsetPage() {
  return (
    <ContentPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SunriseSunsetClient />
    </ContentPageWrapper>
  )
}
