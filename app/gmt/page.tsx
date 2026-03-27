import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import GMTClockClient from './GMTClockClient'

export const metadata: Metadata = {
  title: 'GMT Time Now — Greenwich Mean Time | UTC+0',
  description: 'Current GMT time. Greenwich Mean Time is UTC+0 — 5 hours ahead of EST in winter, 4 hours ahead of EDT in summer. Live clock, GMT vs UTC explained, and what countries use GMT.',
  keywords: ['GMT time now', 'GMT time', 'greenwich mean time', 'GMT+0', 'what is GMT time', 'GMT to EST', 'is GMT 4 or 5 hours ahead of EST', 'which country is GMT'],
  alternates: { canonical: 'https://whattime.city/gmt/' },
  openGraph: {
    title: 'GMT Time Now — Greenwich Mean Time',
    description: 'Live GMT clock. Greenwich Mean Time is UTC+0. The UK observes GMT in winter and BST (UTC+1) in summer.',
    type: 'website',
    url: 'https://whattime.city/gmt/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMT Time Now | Greenwich Mean Time UTC+0',
    description: 'Current GMT time. Is GMT 4 or 5 hours ahead of EST? Depends on DST.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is GMT 4 or 5 hours ahead of EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT is 5 hours ahead of EST (Eastern Standard Time, UTC-5) during winter. GMT is 4 hours ahead of EDT (Eastern Daylight Time, UTC-4) during summer when the US East Coast observes Daylight Saving Time. GMT itself is always UTC+0 — it does not change. The variation comes from the US East Coast switching between EST (UTC-5) in winter and EDT (UTC-4) in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GMT time in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The USA spans multiple time zones, all behind GMT. In winter: Eastern Time (EST) is GMT-5, Central Time (CST) is GMT-6, Mountain Time (MST) is GMT-7, Pacific Time (PST) is GMT-8. During Daylight Saving Time (summer): these become EDT (GMT-4), CDT (GMT-5), MDT (GMT-6), PDT (GMT-7). To convert GMT to US time, subtract the appropriate number of hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries use GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Countries that use GMT (UTC+0) year-round include Iceland, Ghana, Ivory Coast (Côte d\'Ivoire), Senegal, Guinea, Guinea-Bissau, Gambia, Sierra Leone, Liberia, Togo, Burkina Faso, and São Tomé and Príncipe. The United Kingdom observes GMT in winter (October–March) but switches to BST (British Summer Time, UTC+1) during Daylight Saving Time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GMT and UTC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GMT (Greenwich Mean Time) and UTC (Coordinated Universal Time) are both at UTC+0/GMT+0. The difference is technical: GMT is based on solar observation at the Royal Observatory in Greenwich, London. UTC is based on atomic clocks maintained by the International Bureau of Weights and Measures. In practice they differ by less than 0.9 seconds. For everyday use, GMT and UTC are interchangeable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is EST five hours behind GMT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. EST (Eastern Standard Time) is exactly 5 hours behind GMT/UTC. When it is 12:00 PM GMT, it is 7:00 AM EST. During Daylight Saving Time, the East Coast switches to EDT (UTC-4), which is only 4 hours behind GMT. The UK also observes Daylight Saving Time — during BST (UTC+1) in summer, the UK is 5 hours ahead of EDT rather than 4.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'GMT — Greenwich Mean Time', item: 'https://whattime.city/gmt/' },
  ],
}

export default function GMTPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="GMT — Greenwich Mean Time"
        subtitle="UTC+0 · Royal Observatory, Greenwich, London · UK uses GMT in winter"
      />
      <GMTClockClient />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'GMT to EST Converter', href: '/gmt-to-est/' },
          { label: 'GMT to PST Converter', href: '/gmt-to-pst/' },
          { label: 'UTC Time Now', href: '/utc/' },
          { label: 'EST — Eastern Standard Time', href: '/est/' },
          { label: 'PST — Pacific Standard Time', href: '/pst/' },
          { label: 'BST — British Summer Time', href: '/london/' },
          { label: 'London Current Time', href: '/london/' },
          { label: 'Time Zone Converter', href: '/time-converter/' },
          { label: 'Daylight Saving Time UK', href: '/daylight-saving-time/uk/' },
        ]}
        linksTitle="GMT Converters & Related Time Zones"
        footerText="GMT data sourced from IANA Time Zone Database (Etc/GMT). Greenwich Mean Time is UTC+0. The UK observes BST (UTC+1) during Daylight Saving Time (last Sunday in March to last Sunday in October)."
      />
    </ContentPageWrapper>
  )
}
