import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DaysAgoIndividualClient from './DaysAgoIndividualClient'

const PRE_GENERATED = [7, 10, 14, 15, 20, 21, 25, 30, 45, 60, 90, 100, 120, 150, 180, 200, 270, 365]

export async function generateStaticParams() {
  return PRE_GENERATED.map(d => ({ days: String(d) }))
}

export const revalidate = 86400

interface Props {
  params: Promise<{ days: string }>
}

function subtractDays(n: number): Date {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d
}

function formatDateLong(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getWeeksAndDays(n: number): string {
  const weeks = Math.floor(n / 7)
  const days = n % 7
  if (weeks === 0) return `${days} day${days !== 1 ? 's' : ''}`
  if (days === 0) return `${weeks} week${weeks !== 1 ? 's' : ''}`
  return `${weeks} week${weeks !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`
}

function getApproxMonths(n: number): string {
  const months = n / 30.44
  if (months < 1) return ''
  return `approximately ${months.toFixed(1).replace('.0', '')} month${Math.round(months) !== 1 ? 's' : ''}`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { days: daysStr } = await params
  const n = parseInt(daysStr, 10)
  if (isNaN(n) || n < 1 || n > 3650) return { title: 'Days Ago' }

  const targetDate = subtractDays(n)
  const dateStr = formatDateShort(targetDate)
  const dayName = targetDate.toLocaleDateString('en-US', { weekday: 'long' })

  const title = `${n} Days Ago — ${dateStr}`
  const description = `What date was ${n} days ago? ${n} days ago was ${dateStr} (${dayName}). That is ${getWeeksAndDays(n)} in the past. See the exact date with day name and week number.`

  return {
    title,
    description,
    alternates: { canonical: `https://whattime.city/days-ago/${n}/` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://whattime.city/days-ago/${n}/`,
      siteName: 'whattime.city',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function DaysAgoPage({ params }: Props) {
  const { days: daysStr } = await params
  const n = parseInt(daysStr, 10)
  if (isNaN(n) || n < 1 || n > 3650) notFound()

  const targetDate = subtractDays(n)
  const dateStr = formatDateLong(targetDate)
  const shortDate = formatDateShort(targetDate)
  const dayName = targetDate.toLocaleDateString('en-US', { weekday: 'long' })
  const monthName = targetDate.toLocaleDateString('en-US', { month: 'long' })
  const weekNum = (() => {
    const d = new Date(Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()))
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  })()
  const weeksAndDays = getWeeksAndDays(n)
  const approxMonths = getApproxMonths(n)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What date was ${n} days ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days ago was ${dateStr}. That is ${weeksAndDays}${approxMonths ? ` (${approxMonths})` : ''} in the past.`,
        },
      },
      {
        '@type': 'Question',
        name: `What day of the week was ${n} days ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days ago was a ${dayName}, ${shortDate}.`,
        },
      },
      {
        '@type': 'Question',
        name: `How many weeks is ${n} days?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days is ${weeksAndDays}. In decimal weeks, that is ${(n / 7).toFixed(2)} weeks.`,
        },
      },
      {
        '@type': 'Question',
        name: `What week number was ${n} days ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days ago fell in ISO Week ${weekNum} of ${targetDate.getFullYear()}.`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Days Ago', item: 'https://whattime.city/days-ago/' },
      { '@type': 'ListItem', position: 3, name: `${n} Days Ago`, item: `https://whattime.city/days-ago/${n}/` },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DaysAgoIndividualClient
        days={n}
        targetDateStr={dateStr}
        shortDate={shortDate}
        dayName={dayName}
        monthName={monthName}
        weekNum={weekNum}
        weeksAndDays={weeksAndDays}
        approxMonths={approxMonths}
      />
    </ContentPageWrapper>
  )
}
