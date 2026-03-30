import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import USTimeZonesClient from './USTimeZonesClient'

export const metadata: Metadata = {
  title: 'US Time Zone Map — All 6 Time Zones',
  description: 'Complete US time zone map with live clocks. Eastern, Central, Mountain, Pacific, Alaska, and Hawaii time zones — current times, UTC offsets, states list, and converters.',
  keywords: ['us time zone map', 'usa time zones', 'time zones in the us', 'united states time zones', 'us time zones map', 'what time zone am i in', 'eastern time zone', 'central time zone', 'pacific time zone', 'mountain time zone'],
  alternates: { canonical: 'https://whattime.city/us-time-zones/' },
  openGraph: {
    title: 'US Time Zone Map — All 6 Time Zones with Live Clocks',
    description: 'Live clocks for all 6 US time zones. Eastern, Central, Mountain, Pacific, Alaska, and Hawaii time with UTC offsets and state lists.',
    type: 'website',
    url: 'https://whattime.city/us-time-zones/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Time Zone Map — Live Clocks for All 6 Zones',
    description: 'Current time in every US time zone. EST, CST, MST, PST, AKST, HST with states and converters.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many time zones does the US have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The contiguous United States has 4 main time zones: Eastern (ET), Central (CT), Mountain (MT), and Pacific (PT). Including Alaska (AKST) and Hawaii (HST), the US has 6 standard time zones. Territories like Puerto Rico and Guam add more, bringing the total to 9 across all US territories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in Eastern Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eastern Time (ET/EST/EDT) covers: New York, Florida, Georgia, Pennsylvania, Ohio, Michigan, North Carolina, Virginia, Massachusetts, New Jersey, Maryland, Connecticut, Maine, Vermont, New Hampshire, Rhode Island, Delaware, West Virginia, South Carolina, and most of Indiana. Washington D.C. is also in Eastern Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time difference between EST and PST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PST (Pacific Standard Time, UTC-8) is 3 hours behind EST (Eastern Standard Time, UTC-5). When it is 9:00 AM EST on the East Coast, it is 6:00 AM PST on the West Coast. During Daylight Saving Time, both shift simultaneously (to EDT UTC-4 and PDT UTC-7), keeping the 3-hour difference the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona observe Daylight Saving Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Arizona does NOT observe Daylight Saving Time and stays on Mountain Standard Time (MST, UTC-7) year-round. The exception is the Navajo Nation in northeastern Arizona, which does observe DST. This means Arizona can be UTC-7 while neighboring states like Colorado shift to MDT (UTC-6) in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time zone is Hawaii in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii uses Hawaii-Aleutian Standard Time (HST, UTC-10) year-round. Hawaii does not observe Daylight Saving Time, so the offset is always UTC-10. Hawaii is 2 hours behind Pacific Time in winter and 3 hours behind Pacific Time in summer (when the mainland shifts to PDT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What states are in Central Time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Central Time (CT/CST/CDT) covers: Illinois, Texas, Minnesota, Wisconsin, Iowa, Missouri, Kansas, Nebraska, Oklahoma, Arkansas, Louisiana, Mississippi, Alabama, most of Tennessee, western Kentucky, and parts of the Dakotas.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'US Time Zones', item: 'https://whattime.city/us-time-zones/' },
  ],
}

export default function USTimeZonesPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="US Time Zone Map"
        subtitle="All 6 US time zones — live clocks, UTC offsets, states, and converters"
      />
      <USTimeZonesClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'Time in New York', href: '/new-york/' },
          { label: 'Time in Los Angeles', href: '/los-angeles/' },
          { label: 'Time in Chicago', href: '/chicago/' },
          { label: 'Time in Denver', href: '/denver/' },
          { label: 'Time in Honolulu', href: '/honolulu/' },
          { label: 'CST to EST', href: '/cst-to-est/' },
          { label: 'PST to EST', href: '/pst-to-est/' },
          { label: 'Time Converter', href: '/time-converter/' },
          { label: 'World Time Map', href: '/map/' },
        ]}
        linksTitle="US Time & Related Tools"
        footerText="US time zone data sourced from the IANA Time Zone Database. DST transitions follow US federal law (Energy Policy Act of 2005): second Sunday in March (spring forward) and first Sunday in November (fall back)."
      />
    </ContentPageWrapper>
  )
}
