import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Articles — Time, Calendars & Clocks',
  description: 'Explore our articles about time: how many weeks in a year, AM vs PM explained, days in a year, and more. Clear answers backed by data.',
  alternates: { canonical: 'https://whattime.city/articles/' },
  openGraph: {
    title: 'Articles — Time & Calendar Reference',
    description: 'How many weeks in a year? What does AM and PM mean? Find clear, data-backed answers.',
    type: 'website',
    url: 'https://whattime.city/articles/',
    siteName: 'whattime.city',
  },
}

const articles = [
  {
    slug: 'how-many-weeks-in-a-year',
    title: 'How Many Weeks in a Year?',
    description: 'There are 52 weeks and 1 day in a standard year. See the full breakdown by year, work weeks, and ISO week numbers.',
    tags: ['Calendar', 'Weeks', 'Leap Year'],
  },
  {
    slug: 'how-many-days-in-a-year',
    title: 'How Many Days in a Year?',
    description: 'A regular year has 365 days, a leap year has 366. Monthly breakdown, working days, and different calendar systems compared.',
    tags: ['Calendar', 'Days', 'Leap Year'],
  },
  {
    slug: 'am-pm',
    title: 'AM and PM — What Do They Stand For?',
    description: 'AM means Ante Meridiem (before midday), PM means Post Meridiem (after midday). Full 12-hour to 24-hour conversion chart included.',
    tags: ['Clock', '12-Hour', '24-Hour'],
  },
  {
    slug: 'how-many-minutes-in-a-year',
    title: 'How Many Minutes in a Year?',
    description: 'There are 525,600 minutes in a regular year and 527,040 in a leap year. Monthly breakdown, time unit comparisons, and the story behind the famous number.',
    tags: ['Calendar', 'Minutes', 'Time'],
  },
  {
    slug: 'how-many-months-in-a-year',
    title: 'How Many Months in a Year?',
    description: 'There are 12 months in a year. Full breakdown of days per month, quarter structure, month name origins, and a time unit reference table.',
    tags: ['Calendar', 'Months', 'Time'],
  },
  {
    slug: 'how-many-hours-in-a-year',
    title: 'How Many Hours in a Year?',
    description: 'A regular year has 8,760 hours (365 × 24). A leap year has 8,784 hours. Full breakdown with monthly table, working hours, and year-by-year data.',
    tags: ['Calendar', 'Hours', 'Time'],
  },
  {
    slug: 'how-many-seconds-in-a-year',
    title: 'How Many Seconds in a Year?',
    description: 'A regular year has 31,536,000 seconds (365 × 86,400). A leap year has 31,622,400 seconds. Full breakdown with monthly table and time unit comparisons.',
    tags: ['Calendar', 'Seconds', 'Time'],
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whattime.city/' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://whattime.city/articles/' },
  ],
}

export default function ArticlesPage() {
  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <nav className="text-xs text-slate-400 mb-4">
          <Link href="/" className="hover:text-sky-500">Home</Link>
          {' / '}
          <span className="text-slate-600">Articles</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800">
          Articles
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Clear answers to common questions about time, calendars, and clocks.
        </p>

        <div className="grid gap-4">
          {articles.map(article => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-sky-300 transition-colors"
            >
              <h2 className="text-xl font-semibold text-slate-800 group-hover:text-sky-600 transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-slate-600 mb-3">{article.description}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-slate-200 p-5 bg-white">
          <h2 className="font-semibold text-slate-800 mb-3">Related Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/military-time/', label: 'Military Time Converter' },
              { href: '/time-converter/', label: 'Time Zone Converter' },
              { href: '/area-code', label: 'Area Code Lookup' },
              { href: '/meeting/', label: 'Meeting Planner' },
            ].map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl border border-slate-200 p-3 text-center hover:border-sky-300 transition-colors"
              >
                <span className="text-sm text-sky-600 font-medium">{tool.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-6 rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500">
          All articles are regularly updated with current year data. Last reviewed March 2026.
        </footer>
      </div>
    </ContentPageWrapper>
  )
}
