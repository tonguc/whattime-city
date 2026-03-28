import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import PrayerTimesClient from './PrayerTimesClient'

export const metadata: Metadata = {
  title: 'Prayer Times Today — Accurate Salah Times for Any City',
  description: 'Find accurate Islamic prayer times (Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha) for any city worldwide. Multiple calculation methods including ISNA, MWL, and Umm Al-Qura.',
  alternates: {
    canonical: 'https://whattime.city/prayer-times/',
  },
  openGraph: {
    title: 'Prayer Times Today — Salah Times for Any City',
    description: 'Accurate Islamic prayer times for any city. Fajr, Dhuhr, Asr, Maghrib, Isha with multiple calculation methods.',
    type: 'website',
    url: 'https://whattime.city/prayer-times/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prayer Times Today — Salah Times Calculator',
    description: 'Find accurate prayer times for any city worldwide.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the 5 daily prayer times in Islam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five daily prayers (Salah) are: Fajr (pre-dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer has a specific time window determined by the position of the sun.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are Islamic prayer times calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prayer times are calculated based on the position of the sun relative to the horizon. Fajr begins at dawn (sun 15°-19.5° below horizon depending on method), Dhuhr at solar noon, Asr when shadow length equals object height (Shafi) or double (Hanafi), Maghrib at sunset, and Isha when darkness falls (sun 15°-18° below horizon).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between ISNA and MWL calculation methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISNA (Islamic Society of North America) uses 15° for both Fajr and Isha, while MWL (Muslim World League) uses 18° for Fajr and 17° for Isha. ISNA results in later Fajr and earlier Isha times, which is more practical in higher latitudes. MWL is more conservative and widely used internationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Shafi and Hanafi Asr time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the Shafi method, Asr begins when the shadow of an object equals its height plus the shadow at noon. In the Hanafi method, Asr begins when the shadow equals twice the object height plus the noon shadow. This makes Hanafi Asr time approximately 30-60 minutes later than Shafi.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is Fajr prayer today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fajr prayer time varies by location and date. Use our prayer times calculator above — enter your city to see today\'s exact Fajr time. Fajr is the pre-dawn prayer that begins when the first light appears on the horizon.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Prayer Times', item: 'https://whattime.city/prayer-times/' },
  ],
}

export default function PrayerTimesPage() {
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
      <PrayerTimesClient />
    </ContentPageWrapper>
  )
}
