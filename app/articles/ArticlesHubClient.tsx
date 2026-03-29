'use client'

import Link from 'next/link'
import { useArticleTheme } from '@/lib/useArticleTheme'

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

export default function ArticlesHubClient() {
  const t = useArticleTheme()

  return (
    <div>
      <nav className={`text-xs mb-4 ${t.breadcrumb}`}>
        <Link href="/" className={t.breadcrumbLink}>Home</Link>
        {' / '}
        <span className={t.breadcrumbCurrent}>Articles</span>
      </nav>

      <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${t.heading}`}>Articles</h1>
      <p className={`text-lg mb-8 ${t.body}`}>
        Clear answers to common questions about time, calendars, and clocks.
      </p>

      <div className="grid gap-4">
        {articles.map(article => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className={`group ${t.card} p-6 hover:border-sky-400 transition-colors`}
          >
            <h2 className={`text-xl font-semibold mb-2 group-hover:text-sky-500 transition-colors ${t.heading}`}>
              {article.title}
            </h2>
            <p className={`text-sm mb-3 ${t.body}`}>{article.description}</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className={`px-2 py-0.5 rounded-md text-xs ${t.cardAlt} ${t.muted}`}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <section className={`mt-8 ${t.card} p-5`}>
        <h2 className={`font-semibold mb-3 ${t.heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/military-time/', label: 'Military Time Converter' },
            { href: '/time-converter/', label: 'Time Zone Converter' },
            { href: '/area-code/', label: 'Area Code Lookup' },
            { href: '/meeting/', label: 'Meeting Planner' },
          ].map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`${t.cardAlt} p-3 text-center hover:border-sky-400 transition-colors`}
            >
              <span className={`text-sm font-medium text-sky-500`}>{tool.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className={`mt-6 ${t.footer}`}>
        All articles are regularly updated with current year data. Last reviewed March 2026.
      </footer>
    </div>
  )
}
