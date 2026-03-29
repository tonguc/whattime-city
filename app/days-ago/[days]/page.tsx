import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import Link from 'next/link'

const PREGENERATED_DAYS = [
  7, 8, 10, 14, 15, 17, 20, 22, 25, 29, 30, 42,
  45, 60, 90, 100, 120, 150, 180, 365,
]

export async function generateStaticParams() {
  return PREGENERATED_DAYS.map(d => ({ days: String(d) }))
}

export const revalidate = 86400

function addDays(date: Date, n: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

function fmt(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}

function fmtShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function isoDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

function weekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

interface Props {
  params: Promise<{ days: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { days } = await params
  const n = parseInt(days)
  if (isNaN(n) || n < 1 || n > 365) return { title: 'Not Found' }

  const today = new Date()
  const past = addDays(today, -n)
  const weekday = past.toLocaleDateString('en-US', { weekday: 'long' })

  return {
    title: `${n} Days Ago — ${weekday}, ${fmtShort(past)}`,
    description: `${n} days ago was ${fmt(past)}. See the exact date, day of week, and week number.`,
    alternates: { canonical: `https://whattime.city/days-ago/${n}/` },
    openGraph: {
      title: `${n} Days Ago — ${fmtShort(past)}`,
      description: `${n} days ago was ${fmt(past)}.`,
      type: 'website',
      url: `https://whattime.city/days-ago/${n}/`,
      siteName: 'whattime.city',
    },
  }
}

export default async function DaysAgoDetailPage({ params }: Props) {
  const { days } = await params
  const n = parseInt(days)
  if (isNaN(n) || n < 1 || n > 365) notFound()

  const today = new Date()
  const past = addDays(today, -n)
  const future = addDays(today, n)

  const pastWeek = weekNumber(past)
  const pastYear = past.getFullYear()
  const weeks = Math.floor(n / 7)
  const remainDays = n % 7
  const months = parseFloat((n / 30.44).toFixed(1))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What date was ${n} days ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days ago was ${fmt(past)} (${isoDate(past)}).`,
        },
      },
      {
        '@type': 'Question',
        name: `What day of the week was ${n} days ago?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days ago was a ${past.toLocaleDateString('en-US', { weekday: 'long' })}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What date is ${n} days from today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days from today is ${fmt(future)} (${isoDate(future)}).`,
        },
      },
      {
        '@type': 'Question',
        name: `How many weeks is ${n} days?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${n} days equals ${weeks} week${weeks !== 1 ? 's' : ''}${remainDays > 0 ? ` and ${remainDays} day${remainDays !== 1 ? 's' : ''}` : ''} (approximately ${months} months).`,
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
      { '@type': 'ListItem', position: 3, name: `${n} Days Ago`, item: `https://whattime.city/days-ago/${n}/` },
    ],
  }

  const relatedDays = PREGENERATED_DAYS.filter(d => d !== n).slice(0, 8)

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-2xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-slate-700 underline">Home</Link></li>
            <li className="text-slate-400">/</li>
            <li><Link href="/days-from-today/" className="hover:text-slate-700 underline">Days Calculator</Link></li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-700">{n} Days Ago</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-slate-800 mb-2 sm:text-4xl">
          {n} Days Ago
        </h1>

        {/* Primary Answer */}
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6 mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 mb-1">
            {n} days ago was:
          </p>
          <p className="text-3xl font-bold text-amber-900 tabular-nums mb-1">
            {fmt(past)}
          </p>
          <p className="text-sm text-amber-700">
            ISO date: <span className="font-mono">{isoDate(past)}</span>
            {' · '}Week {pastWeek} of {pastYear}
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500 mb-1">Day of Week</p>
            <p className="font-bold text-slate-800">{past.toLocaleDateString('en-US', { weekday: 'long' })}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500 mb-1">In Weeks</p>
            <p className="font-bold text-slate-800">{weeks}w {remainDays}d</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500 mb-1">In Months</p>
            <p className="font-bold text-slate-800">~{months} months</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500 mb-1">ISO Week</p>
            <p className="font-bold text-slate-800">W{pastWeek} / {pastYear}</p>
          </div>
        </div>

        {/* Also: X days FROM NOW */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-8">
          <p className="text-sm font-semibold text-slate-600 mb-1">{n} days from today will be:</p>
          <p className="text-xl font-bold text-slate-800">{fmt(future)}</p>
          <p className="text-sm text-slate-500 mt-1">
            ISO: <span className="font-mono">{isoDate(future)}</span>
            {' · '}
            <Link href={`/days-from-today/${n}/`} className="text-blue-600 underline hover:text-blue-800">
              See full details →
            </Link>
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-800 mb-1">What date was {n} days ago?</h3>
              <p className="text-slate-600">{fmt(past)} ({isoDate(past)}).</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-800 mb-1">What day of the week was {n} days ago?</h3>
              <p className="text-slate-600">
                {n} days ago was a <strong>{past.toLocaleDateString('en-US', { weekday: 'long' })}</strong>.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-800 mb-1">What date is {n} days from today?</h3>
              <p className="text-slate-600">{fmt(future)} ({isoDate(future)}).</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-800 mb-1">How many weeks is {n} days?</h3>
              <p className="text-slate-600">
                {n} days = <strong>{weeks} week{weeks !== 1 ? 's' : ''}{remainDays > 0 ? ` and ${remainDays} day${remainDays !== 1 ? 's' : ''}` : ''}</strong> (≈ {months} months).
              </p>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Other Day Counts</h2>
          <div className="flex flex-wrap gap-2">
            {relatedDays.map(d => (
              <Link
                key={d}
                href={`/days-ago/${d}/`}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-amber-300 hover:text-amber-700"
              >
                {d} days ago
              </Link>
            ))}
            <Link
              href="/days-from-today/"
              className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm text-blue-700 hover:bg-blue-100"
            >
              Custom calculator →
            </Link>
          </div>
        </section>
      </article>
    </ContentPageWrapper>
  )
}
