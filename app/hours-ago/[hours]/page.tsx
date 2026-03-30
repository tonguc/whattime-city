import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import HoursAgoIndividualClient from './HoursAgoIndividualClient'

// Pre-generate most common hour lookups
const PRE_GENERATED = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24, 36, 48, 72]

export async function generateStaticParams() {
  return PRE_GENERATED.map(h => ({ hours: String(h) }))
}

// Revalidate every hour so the displayed time stays current
export const revalidate = 3600

interface Props {
  params: Promise<{ hours: string }>
}

function subtractHours(h: number): Date {
  const d = new Date()
  d.setTime(d.getTime() - h * 60 * 60 * 1000)
  return d
}

function formatTime12(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', hour12: true,
  })
}

function formatTime24(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: false,
  })
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatDateLong(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hours: hoursStr } = await params
  const h = parseInt(hoursStr, 10)
  if (isNaN(h) || h < 1 || h > 8760) return { title: 'Hours Ago' }

  const targetDate = subtractHours(h)
  const timeStr = formatTime12(targetDate)
  const dateStr = formatDateShort(targetDate)

  const title = `${h} Hours Ago — What Time Was It?`
  const description = `What time was it ${h} hours ago? ${h} hours ago was ${timeStr} on ${dateStr}. Use our calculator to find the exact time with AM/PM and full date.`

  return {
    title,
    description,
    alternates: { canonical: `https://whattime.city/hours-ago/${h}/` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://whattime.city/hours-ago/${h}/`,
      siteName: 'whattime.city',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function HoursAgoPage({ params }: Props) {
  const { hours: hoursStr } = await params
  const h = parseInt(hoursStr, 10)
  if (isNaN(h) || h < 1 || h > 8760) notFound()

  const targetDate = subtractHours(h)
  const time12 = formatTime12(targetDate)
  const time24 = formatTime24(targetDate)
  const shortDate = formatDateShort(targetDate)
  const longDate = formatDateLong(targetDate)
  const dayName = targetDate.toLocaleDateString('en-US', { weekday: 'long' })

  // Check if it crossed midnight
  const now = new Date()
  const nowDateStr = formatDateShort(now)
  const crossedMidnight = shortDate !== nowDateStr

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What time was it ${h} hours ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${h} hours ago was ${time12} (${time24}) on ${longDate}.${crossedMidnight ? ` Note: this time fell on a previous calendar day (${shortDate}).` : ''}`,
        },
      },
      {
        '@type': 'Question',
        name: `What day was ${h} hours ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${h} hours ago was ${dayName}, ${shortDate}.`,
        },
      },
      {
        '@type': 'Question',
        name: `How many days is ${h} hours?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${h} hours is ${(h / 24).toFixed(2)} days, or ${Math.floor(h / 24)} day${Math.floor(h / 24) !== 1 ? 's' : ''}${h % 24 > 0 ? ` and ${h % 24} hour${h % 24 !== 1 ? 's' : ''}` : ''}.`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Hours Ago', item: 'https://whattime.city/hours-ago/' },
      { '@type': 'ListItem', position: 3, name: `${h} Hours Ago`, item: `https://whattime.city/hours-ago/${h}/` },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HoursAgoIndividualClient
        hours={h}
        time12={time12}
        time24={time24}
        shortDate={shortDate}
        longDate={longDate}
        dayName={dayName}
        crossedMidnight={crossedMidnight}
      />
    </ContentPageWrapper>
  )
}
