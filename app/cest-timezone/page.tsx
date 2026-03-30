import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'CEST — Central European Summer Time (UTC+2)',
  description: 'What is CEST? Central European Summer Time is UTC+2, used across Europe from late March to late October. Current CEST time, countries, and converters.',
  keywords: ['CEST', 'central european summer time', 'cest timezone', 'cest utc', 'cest time zone', 'what is cest', 'cest time now'],
  alternates: { canonical: 'https://whattime.city/cest-timezone/' },
  openGraph: {
    title: 'CEST — Central European Summer Time (UTC+2)',
    description: 'Current CEST time. Central European Summer Time is UTC+2, active from last Sunday of March to last Sunday of October.',
    type: 'website',
    url: 'https://whattime.city/cest-timezone/',
    siteName: 'whattime.city',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEST Timezone — Central European Summer Time',
    description: 'Current CEST time with country list and converters.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is CEST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CEST stands for Central European Summer Time. It is UTC+2, used by most of Central Europe during Daylight Saving Time from the last Sunday of March to the last Sunday of October. During the rest of the year, these countries revert to CET (Central European Time, UTC+1).',
      },
    },
    {
      '@type': 'Question',
      name: 'What UTC offset is CEST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CEST is UTC+2, meaning it is 2 hours ahead of Coordinated Universal Time. It is the DST (summer) version of CET (UTC+1). CEST is active from the last Sunday of March at 2:00 AM until the last Sunday of October at 3:00 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries use CEST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Countries that observe CEST (during European summer): Germany, France, Italy, Spain, Switzerland, Austria, Netherlands, Belgium, Luxembourg, Poland, Czech Republic, Slovakia, Hungary, Croatia, Serbia, Slovenia, Montenegro, Bosnia and Herzegovina, North Macedonia, Kosovo, Albania, Monaco, Andorra, San Marino, and Vatican City. These countries use CET (UTC+1) in winter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CEST and EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CEST (UTC+2) is 7 hours ahead of EST (UTC-5). When it is 9:00 AM EST in New York, it is 4:00 PM CEST in Paris or Berlin. During US Daylight Saving Time (EDT, UTC-4), the gap narrows to 6 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CEST and BST (British Summer Time)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CEST (UTC+2) is 1 hour ahead of BST (British Summer Time, UTC+1). When the UK observes BST (from late March to late October), it is 1 hour behind the rest of Central Europe on CEST. For example, 14:00 CEST = 13:00 BST.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Europe switch to CEST in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2026, Europe switches to CEST on Sunday, March 29, 2026 at 2:00 AM local time (clocks move to 3:00 AM). Clocks go back to CET (UTC+1) on Sunday, October 25, 2026 at 3:00 AM (clocks move to 2:00 AM).',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'CEST Timezone', item: 'https://whattime.city/cest-timezone/' },
  ],
}

export default function CESTTimezonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="CEST — Central European Summer Time"
        subtitle="UTC+2 · Active from last Sunday of March to last Sunday of October"
      />
      <TZExplainerClient
        tz="Europe/Paris"
        abbr="CET/CEST"
        stdName="Central European Time"
        stdAbbr="CET"
        dstAbbr="CEST"
        utcStd="UTC+1"
        utcDst="UTC+2"
        color="bg-sky-600"
        states={['Germany', 'France', 'Italy', 'Spain', 'Switzerland', 'Austria', 'Netherlands', 'Belgium', 'Poland', 'Czech Republic', 'Hungary', 'Croatia', 'Serbia', 'Slovakia', 'Slovenia', 'Luxembourg', 'Monaco', 'Andorra', 'San Marino', 'Vatican City']}
        majorCities={[
          { name: 'Paris', href: '/paris/' },
          { name: 'Berlin', href: '/berlin/' },
          { name: 'Rome', href: '/rome/' },
          { name: 'Madrid', href: '/madrid/' },
          { name: 'Amsterdam', href: '/amsterdam/' },
          { name: 'Vienna', href: '/vienna/' },
          { name: 'Warsaw', href: '/warsaw/' },
          { name: 'Brussels', href: '/brussels/' },
          { name: 'Zurich', href: '/zurich/' },
          { name: 'Prague', href: '/prague/' },
          { name: 'Budapest', href: '/budapest/' },
          { name: 'Barcelona', href: '/barcelona/' },
        ]}
        dstNote="CEST active: Last Sunday of March → Last Sunday of October"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'CET to EST', href: '/cet-to-est/' },
          { label: 'EST to GMT', href: '/est-to-gmt/' },
          { label: 'GMT to EST', href: '/gmt-to-est/' },
          { label: 'Time in Paris', href: '/paris/' },
          { label: 'Time in Berlin', href: '/berlin/' },
          { label: 'Time in Rome', href: '/rome/' },
          { label: 'Daylight Saving Time', href: '/daylight-saving-time/' },
          { label: 'DST in Europe', href: '/daylight-saving-time/europe/' },
          { label: 'Time Converter', href: '/time-converter/' },
        ]}
        linksTitle="CEST Converters & European Time"
        footerText="CEST (Central European Summer Time) = UTC+2. Active during European DST: last Sunday of March to last Sunday of October. Data sourced from IANA Time Zone Database (Europe/Paris, Europe/Berlin, etc.)."
      />
    </ContentPageWrapper>
  )
}
