import type { Metadata } from 'next'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import ArticlesHubClient from './ArticlesHubClient'

export const metadata: Metadata = {
  title: 'Articles — Time, Calendars & Clocks Explained | whattime.city',
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
      <ArticlesHubClient />
    </ContentPageWrapper>
  )
}
