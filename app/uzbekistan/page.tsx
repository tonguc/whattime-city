import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import UzbekistanClockClient from './UzbekistanClockClient'
import CountryFactsSection from '@/components/CountryFactsSection'

export const metadata: Metadata = {
  title: 'Time in Uzbekistan Now — UZT · Tashkent · UTC+5',
  description: 'What time is it in Uzbekistan right now? Uzbekistan uses Uzbekistan Time (UZT, UTC+5) year-round with no Daylight Saving Time. Tashkent live clock and time zone info.',
  keywords: ['time in uzbekistan', 'uzbekistan time now', 'what time is it in uzbekistan', 'tashkent time', 'uzbekistan time zone', 'UZT uzbekistan', 'uzbekistan utc+5', 'tashkent current time', 'uzbekistan no dst', 'samarkand time'],
  alternates: { canonical: 'https://whattime.city/uzbekistan/' },
  openGraph: { title: 'Current Time in Uzbekistan — UZT · Tashkent', description: 'Live Uzbekistan time. Tashkent and all of Uzbekistan use UZT (UTC+5) year-round — no Daylight Saving Time.', type: 'website', url: 'https://whattime.city/uzbekistan/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Uzbekistan right now?', acceptedAnswer: { '@type': 'Answer', text: 'Uzbekistan uses Uzbekistan Time (UZT, UTC+5) year-round. Tashkent, Samarkand, Bukhara, Namangan, and all Uzbek cities share the same time. The live clock above shows the current time in Uzbekistan.' } },
    { '@type': 'Question', name: 'What time zone is Tashkent in?', acceptedAnswer: { '@type': 'Answer', text: 'Tashkent, the capital of Uzbekistan, uses the UZT time zone (Asia/Tashkent, UTC+5). Uzbekistan discontinued Daylight Saving Time in 1992. Tashkent is on the same time as Islamabad (Pakistan) and Almaty (Kazakhstan, +6 during summer).' } },
    { '@type': 'Question', name: 'Does Uzbekistan observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'No. Uzbekistan abolished Daylight Saving Time in 1992, shortly after independence from the Soviet Union. Clocks in Tashkent and across Uzbekistan remain at UZT (UTC+5) throughout the entire year.' } },
    { '@type': 'Question', name: 'What is the time difference between Uzbekistan and Moscow?', acceptedAnswer: { '@type': 'Answer', text: 'Uzbekistan (UZT, UTC+5) is always 2 hours ahead of Moscow (MSK, UTC+3). Russia does not observe DST and Uzbekistan does not either, so this 2-hour difference is constant year-round.' } },
    { '@type': 'Question', name: 'What is the time difference between Uzbekistan and India?', acceptedAnswer: { '@type': 'Answer', text: 'Uzbekistan (UZT, UTC+5) is 30 minutes ahead of India (IST, UTC+5:30). Tashkent is half an hour behind Delhi and Mumbai. Neither country observes Daylight Saving Time, so this difference is constant.' } },
    { '@type': 'Question', name: 'What is the time difference between Uzbekistan and Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Uzbekistan (UZT, UTC+5) is 1 hour ahead of Dubai (GST, UTC+4). When it is noon in Dubai, it is 1:00 PM in Tashkent. Neither the UAE nor Uzbekistan observes DST.' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Uzbekistan', item: 'https://whattime.city/uzbekistan/' }] }

export default function UzbekistanTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Uzbekistan" subtitle="UZT (UTC+5) · Tashkent · No Daylight Saving Time" />
      <UzbekistanClockClient />
      <CountryFactsSection hubSlug="uzbekistan" />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Pakistan time', href: '/pakistan/' }, { label: 'India time', href: '/india/' }, { label: 'Dubai time', href: '/dubai/' }, { label: 'Turkey time', href: '/turkey/' }, { label: 'Russia time', href: '/russia/' }, { label: 'Bangladesh time', href: '/bangladesh/' }, { label: 'London time', href: '/london/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Central Asia & Related Time Pages"
        footerText="Time zone data powered by the IANA Time Zone Database. Uzbekistan: Asia/Tashkent (UZT, UTC+5, no DST)."
      />
    </ContentPageWrapper>
  )
}
