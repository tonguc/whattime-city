import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HubPageLayout from '@/components/HubPageLayout'
import HubPageHeader from '@/components/HubPageHeader'
import OregonClockClient from './OregonClockClient'

export const metadata: Metadata = {
  title: 'Time in Oregon Now — PST/PDT · Portland · Malheur County MT',
  description: 'What time is it in Oregon right now? Most of Oregon uses Pacific Time (PST/PDT). Malheur County uses Mountain Time (MST/MDT). Live Portland clock and best time to call.',
  keywords: ['time in oregon', 'oregon time now', 'what time is it in oregon', 'portland time', 'oregon time zone', 'PST PDT oregon', 'oregon utc-8', 'salem time', 'eugene time', 'malheur county time zone', 'ontario oregon time', 'oregon pacific time'],
  alternates: { canonical: 'https://whattime.city/oregon/' },
  openGraph: { title: 'Current Time in Oregon — PST/PDT (Portland) · Malheur County on MT', description: 'Live Oregon time. Portland, Salem, Eugene on Pacific Time. Malheur County (Ontario) on Mountain Time — 1 hour ahead.', type: 'website', url: 'https://whattime.city/oregon/', siteName: 'whattime.city' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What time is it in Oregon right now?', acceptedAnswer: { '@type': 'Answer', text: 'Most of Oregon uses Pacific Time. Portland, Salem, Eugene, and Bend are on PST (UTC−8) in winter and PDT (UTC−7) during Daylight Saving Time. However, Malheur County in southeastern Oregon (including Ontario) uses Mountain Time (MST/MDT), which is 1 hour ahead of the rest of Oregon. The live clock above shows Portland (Pacific) time.' } },
    { '@type': 'Question', name: 'What time zone is Portland in?', acceptedAnswer: { '@type': 'Answer', text: 'Portland is in the Pacific Time zone (America/Los_Angeles). Portland uses PST (UTC−8) during standard time (November to March) and PDT (UTC−7) during Daylight Saving Time (March to November). Portland is on the same time as Seattle, San Francisco, and Los Angeles.' } },
    { '@type': 'Question', name: 'Why is Malheur County in a different time zone than the rest of Oregon?', acceptedAnswer: { '@type': 'Answer', text: 'Malheur County, in southeastern Oregon near the Idaho border, uses Mountain Time (MST/MDT, America/Boise) rather than Pacific Time. This is because the region has stronger economic and community ties to Idaho (which uses Mountain Time) than to the rest of Oregon. The city of Ontario, Malheur County\'s largest city, is 1 hour ahead of Portland.' } },
    { '@type': 'Question', name: 'Does Oregon observe Daylight Saving Time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Oregon observes Daylight Saving Time. Clocks spring forward 1 hour on the second Sunday in March and fall back 1 hour on the first Sunday in November. In 2019, Oregon passed a bill to observe permanent Daylight Saving Time (PDT/UTC−7 year-round), but this requires federal approval and has not yet taken effect. Oregon currently still changes its clocks twice a year.' } },
    { '@type': 'Question', name: 'What is the time difference between Oregon and New York?', acceptedAnswer: { '@type': 'Answer', text: 'Oregon (Pacific Time) is always 3 hours behind New York (Eastern Time). When it is noon in New York (EST/EDT), it is 9:00 AM in Portland (PST/PDT). Both states observe DST on the same schedule, so the 3-hour difference is constant year-round. (Malheur County, on Mountain Time, is 2 hours behind New York.)' } },
    { '@type': 'Question', name: 'What is the time difference between Oregon and the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Portland (PST, UTC−8) is 8 hours behind London (GMT, UTC+0) in winter. During US Daylight Saving Time, Portland moves to PDT (UTC−7), making it 7 hours behind London (GMT). When both the US and UK are on summer time, Portland (PDT) is 8 hours behind London (BST, UTC+1).' } },
  ],
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' }, { '@type': 'ListItem', position: 2, name: 'Time in Oregon', item: 'https://whattime.city/oregon/' }] }

export default function OregonTimePage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HubPageHeader title="Current Time in Oregon" subtitle="Pacific Time (PST/PDT) · Portland · Malheur County on Mountain Time" />
      <OregonClockClient />
            <HubPageLayout
        faqItems={faqSchema.mainEntity.map(i => ({ name: i.name, text: i.acceptedAnswer.text }))}
        links={[{ label: 'Portland time', href: '/portland/' }, { label: 'Seattle time', href: '/seattle/' }, { label: 'Los Angeles time', href: '/los-angeles/' }, { label: 'Time in Washington State', href: '/washington-state/' }, { label: 'Time in California', href: '/california/' }, { label: 'Time in Nevada', href: '/nevada/' }, { label: 'Time in Arizona', href: '/arizona/' }, { label: 'Time converter tool', href: '/time-converter/' }]}
        linksTitle="Oregon City Times & Converters"
        footerText="Time zone data powered by the IANA Time Zone Database. Oregon: America/Los_Angeles (PST/PDT) for most of state; America/Boise (MST/MDT) for Malheur County."
      />
    </ContentPageWrapper>
  )
}
