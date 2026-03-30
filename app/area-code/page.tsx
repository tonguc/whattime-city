import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AreaCodeHubClient from './AreaCodeHubClient'
import { areaCodeList } from '@/data/area-codes'

export const metadata: Metadata = {
  title: 'US & Canada Area Codes — Time Zone Lookup',
  description: `Find time zones for ${areaCodeList.length}+ North American area codes. Look up any US or Canadian area code to see its city, state, time zone, UTC offset, and DST status.`,
  alternates: { canonical: 'https://whattime.city/area-code/' },
  openGraph: {
    title: 'Area Code Time Zone Lookup — US & Canada',
    description: `${areaCodeList.length}+ area codes with time zones, cities, and DST info.`,
    type: 'website',
    url: 'https://whattime.city/area-code/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Area Code Time Zone Lookup — US & Canada',
    description: `Search ${areaCodeList.length}+ US & Canadian area codes with time zones, cities, DST status.`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find the time zone for an area code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Search for any US or Canadian area code on this page to find its time zone, UTC offset, and DST status. We cover ${areaCodeList.length} area codes across North America.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do all area codes in the same state share a time zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. Some states span multiple time zones. For example, Indiana has area codes in both Eastern and Central time. Texas has area codes in both Central and Mountain time (El Paso uses MST). Oregon spans Pacific and Mountain time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an area code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An area code is a 3-digit prefix assigned by the North American Numbering Plan Administration (NANPA) to geographic regions in the US, Canada, and Caribbean territories. Area codes identify where a phone number was originally assigned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an overlay area code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An overlay is a second (or third) area code assigned to the same geographic region when the original code runs out of numbers. For example, Manhattan has both 212 and 332. Overlay codes require 10-digit dialing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many area codes are there in North America?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The North American Numbering Plan (NANP) currently assigns over 400 area codes across the US, Canada, and Caribbean. This page covers ${areaCodeList.length} of the most-searched codes with time zone, city, and DST data.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Does an area code tell you what time zone someone is in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually yes. Each area code is assigned to a specific geographic region with a known time zone. However, with number portability, people can keep their area code after moving — so the caller may not physically be in that time zone.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Area Codes', item: 'https://whattime.city/area-code/' },
  ],
}

export default function AreaCodeHubPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AreaCodeHubClient />
    </ContentPageWrapper>
  )
}
