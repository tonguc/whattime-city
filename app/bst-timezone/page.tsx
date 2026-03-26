import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageHeader from '@/components/HubPageHeader'
import HubPageLayout from '@/components/HubPageLayout'
import TZExplainerClient from '@/components/TZExplainerClient'

export const metadata: Metadata = {
  title: 'BST — British Summer Time (UTC+1)',
  description: 'What is BST? British Summer Time is UTC+1, used in the UK from late March to late October. Current BST time, when it starts/ends, and converters.',
  keywords: ['BST', 'british summer time', 'bst timezone', 'bst utc', 'bst time zone', 'what is bst', 'bst time now', 'uk summer time'],
  alternates: { canonical: 'https://whattime.city/bst-timezone/' },
  openGraph: {
    title: 'BST — British Summer Time (UTC+1)',
    description: 'Current BST time. British Summer Time is UTC+1, active from last Sunday of March to last Sunday of October.',
    type: 'website',
    url: 'https://whattime.city/bst-timezone/',
    siteName: 'whattime.city',
  },
  twitter: { card: 'summary_large_image', title: 'BST Timezone — British Summer Time UTC+1', description: 'Current BST time with UK DST dates and converters.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is BST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BST stands for British Summer Time. It is UTC+1, used in the United Kingdom and Crown Dependencies (Jersey, Guernsey, Isle of Man) from the last Sunday of March to the last Sunday of October. Outside this period, the UK uses GMT (UTC+0). Ireland observes Irish Standard Time (IST) simultaneously, which is also UTC+1.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UTC offset is BST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BST is UTC+1, meaning it is 1 hour ahead of Coordinated Universal Time. It is the UK\'s Daylight Saving Time (summer) offset. The UK uses GMT (UTC+0) in winter and BST (UTC+1) in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the UK switch to BST in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2026, the UK switches to BST on Sunday, March 29, 2026 at 1:00 AM GMT (clocks move to 2:00 AM BST). Clocks go back to GMT on Sunday, October 25, 2026 at 2:00 AM BST (clocks move to 1:00 AM GMT).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between BST and EST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BST (UTC+1) is 6 hours ahead of EST (UTC-5). When New York is on EDT (UTC-4) in summer, BST is only 5 hours ahead. The exact difference depends on whether both the UK and US have changed their clocks, as transitions happen on different dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between BST and CEST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BST (UTC+1) is 1 hour behind CEST (UTC+2). When Central Europe observes CEST (summer time), the UK on BST is 1 hour behind. For example, 14:00 CEST = 13:00 BST.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countries observe BST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BST is observed in: England, Scotland, Wales, Northern Ireland, Jersey, Guernsey, and the Isle of Man. Ireland observes Irish Standard Time (IST) at the same offset (UTC+1) but under a different name.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'BST Timezone', item: 'https://whattime.city/bst-timezone/' },
  ],
}

export default function BSTTimezonePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader
        title="BST — British Summer Time"
        subtitle="UTC+1 · Active from last Sunday of March to last Sunday of October"
      />
      <TZExplainerClient
        tz="Europe/London"
        abbr="GMT/BST"
        stdName="Greenwich Mean Time"
        stdAbbr="GMT"
        dstAbbr="BST"
        utcStd="UTC+0"
        utcDst="UTC+1"
        color="bg-indigo-600"
        states={['England', 'Scotland', 'Wales', 'Northern Ireland', 'Jersey', 'Guernsey', 'Isle of Man', 'Ireland (IST, same offset)']}
        majorCities={[
          { name: 'London', href: '/london/' },
          { name: 'Manchester', href: '/manchester/' },
          { name: 'Birmingham', href: '/birmingham/' },
          { name: 'Edinburgh', href: '/edinburgh/' },
          { name: 'Glasgow', href: '/glasgow/' },
          { name: 'Dublin', href: '/dublin/' },
          { name: 'Belfast', href: '/belfast/' },
          { name: 'Cardiff', href: '/cardiff/' },
        ]}
        dstNote="BST active: Last Sunday of March → Last Sunday of October"
      />
      <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[
          { label: 'GMT to EST', href: '/gmt-to-est/' },
          { label: 'GMT to PST', href: '/gmt-to-pst/' },
          { label: 'GMT to CST', href: '/gmt-to-cst/' },
          { label: 'EST to GMT', href: '/est-to-gmt/' },
          { label: 'PST to GMT', href: '/pst-to-gmt/' },
          { label: 'CEST Timezone', href: '/cest-timezone/' },
          { label: 'Daylight Saving — UK', href: '/daylight-saving-time/uk/' },
          { label: 'Time in London', href: '/london/' },
          { label: 'Time Converter', href: '/time-converter/' },
        ]}
        linksTitle="BST Converters & UK Time"
        footerText="BST (British Summer Time) = UTC+1. Active during UK DST: last Sunday of March to last Sunday of October. Data sourced from IANA Time Zone Database (Europe/London)."
      />
    </ContentPageWrapper>
  )
}
