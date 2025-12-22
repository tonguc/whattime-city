import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import StockMarketContent from './StockMarketContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() { return [{ city: 'new-york' }] }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  return {
    title: `NYSE & NASDAQ Trading Hours | Pre-Market, Regular & After-Hours`,
    description: `NYSE opens 9:30 AM ET. Complete Wall Street trading schedule with pre-market (4 AM), regular hours, after-hours, and market holidays. Times for London, Tokyo, Sydney investors.`,
    keywords: [
      'nyse trading hours',
      'nasdaq opening time',
      'wall street hours',
      'stock market hours est',
      'pre market hours nyse',
      'after hours trading times',
      'nyse hours london time',
      'us market open tokyo time',
      'stock market holidays',
    ],
    openGraph: {
      title: `NYSE & NASDAQ Trading Hours | Wall Street Schedule`,
      description: `Complete guide to US stock market hours - pre-market, regular session, after-hours, and holiday closures.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/stock-market/`,
    },
  }
}

export default async function StockMarketPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <StockMarketContent city={city} />
}
