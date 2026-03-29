import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import AreaCodeDetailClient from './AreaCodeDetailClient'
import { areaCodes, areaCodeList } from '@/data/area-codes'

interface Props {
  params: Promise<{ code: string }>
}

export async function generateStaticParams() {
  return areaCodeList.map(code => ({ code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const data = areaCodes[code]
  if (!data) return { title: 'Area Code Not Found' }

  const countryLabel = data.country === 'CA' ? 'Canada' : 'USA'

  return {
    title: `${data.code} Area Code — ${data.city}, ${data.stateCode}`,
    description: `Area code ${data.code} is in ${data.city}, ${data.state} (${countryLabel}) — ${data.tzAbbr} time zone (${data.utcOffset}). Covers ${data.coverageArea}. See current local time, DST dates, and calling tips.`,
    alternates: { canonical: `https://whattime.city/area-code/${data.code}` },
    openGraph: {
      title: `${data.code} Area Code — ${data.city}, ${data.stateCode}`,
      description: `Area code ${data.code} serves ${data.city}, ${data.state}. Time zone: ${data.tzAbbr} (${data.utcOffset}).`,
      type: 'website',
      url: `https://whattime.city/area-code/${data.code}`,
      siteName: 'whattime.city',
    },
  }
}

export default async function AreaCodePage({ params }: Props) {
  const { code } = await params
  const data = areaCodes[code]
  if (!data) notFound()

  const countryLabel = data.country === 'CA' ? 'Canada' : 'United States'

  // Related area codes: same state first, then same timezone
  const sameState = Object.values(areaCodes)
    .filter(d => d.state === data.state && d.code !== data.code)
    .sort((a, b) => a.code.localeCompare(b.code))

  const sameTz = Object.values(areaCodes)
    .filter(d => d.tzAbbr === data.tzAbbr && d.state !== data.state && d.code !== data.code)
    .sort(() => 0.5 - Math.random())
    .slice(0, 12)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Where is area code ${data.code}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} is located in ${data.city}, ${data.state} (${countryLabel}). It covers ${data.coverageArea}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time zone is area code ${data.code} in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} (${data.city}, ${data.state}) is in the ${data.tzAbbr} time zone. Standard time is ${data.utcOffset}${data.observesDST ? ` and ${data.utcOffsetDST} during Daylight Saving Time` : '. This area does not observe DST'}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time is it in area code ${data.code} right now?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} follows ${data.tzAbbr} (${data.utcOffset}). See the live clock at whattime.city/${data.citySlug}/ for the exact current time in ${data.city}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is area code ${data.code} a scam?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} is a legitimate NANPA-assigned code serving ${data.city}, ${data.state}. However, scammers can spoof any area code using VoIP technology. If you receive an unexpected call from (${data.code}), verify the caller before sharing personal information.`,
        },
      },
      {
        '@type': 'Question',
        name: `When was area code ${data.code} introduced?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Area code ${data.code} was introduced in ${data.introduced}. ${data.notes || `It serves ${data.city}, ${data.state}.`}`,
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
      { '@type': 'ListItem', position: 3, name: `(${data.code}) ${data.city}`, item: `https://whattime.city/area-code/${data.code}` },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AreaCodeDetailClient data={data} sameState={sameState} sameTz={sameTz} />
    </ContentPageWrapper>
  )
}
