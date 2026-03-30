import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import DaysFromTodayIndividualClient from './DaysFromTodayIndividualClient'

// Pre-generate the highest-traffic day counts
const PRE_GENERATED = [7, 10, 14, 15, 20, 21, 25, 30, 45, 60, 90, 100, 120, 150, 180, 200, 270, 365]

export async function generateStaticParams() {
  return PRE_GENERATED.map(d => ({ days: String(d) }))
}

// Revalidate daily — the actual date changes every day
export const revalidate = 86400

interface Props {
  params: Promise<{ days: string }>
}

function getDateFromToday(n: number): Date {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d
}

function formatDateLong(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
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
  if (isNaN(n) || n < 1 || n > 3650) return { title: 'Days From Today' }

  const targetDate = getDateFromToday(n)
  const dateStr = formatDateShort(targetDate)
  const dayName = targetDate.toLocaleDateString('en-US', { weekday: 'long' })

  const title = `${n} Days From Today — ${dateStr}`
  const description = `What date is ${n} days from today? ${n} days from today is ${dateStr} (${dayName}), ${getWeeksAndDays(n)} from now.`

  return {
    title,
    description,
    alternates: { canonical: `https://whattime.city/days-from-today/${n}/` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://whattime.city/days-from-today/${n}/`,
      siteName: 'whattime.city',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function DaysFromTodayPage({ params }: Props) {
  const { days: daysStr } = await params
  const n = parseInt(daysStr, 10)
  if (isNaN(n) || n < 1 || n > 3650) notFound()

  const targetDate = getDateFromToday(n)
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

  // JSON-LD schemas
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What date is ${n} days from today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days from today is ${dateStr}. That is ${weeksAndDays}${approxMonths ? ` (${approxMonths})` : ''} from today.`,
        },
      },
      {
        '@type': 'Question',
        name: `What day of the week is ${n} days from today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days from today falls on a ${dayName}, ${shortDate}.`,
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
        name: `What week number is ${n} days from today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days from today falls in ISO Week ${weekNum} of ${targetDate.getFullYear()}.`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
      { '@type': 'ListItem', position: 2, name: 'Days From Today', item: 'https://whattime.city/days-from-today/' },
      { '@type': 'ListItem', position: 3, name: `${n} Days From Today`, item: `https://whattime.city/days-from-today/${n}/` },
    ],
  }

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DaysFromTodayIndividualClient
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
