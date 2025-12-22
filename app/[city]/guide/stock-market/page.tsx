import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import StockMarketContent from './StockMarketContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() { return [{ city: 'new-york' }] }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `NYSE Trading Hours: Global Investor Guide to New York Stock Market | whattime.city`,
    description: `When does the NYSE open? Stock market hours for investors in London, Tokyo, Sydney. Pre-market, after-hours, and holiday schedules.`,
    keywords: ['nyse trading hours', 'new york stock exchange hours', 'stock market hours eastern time', 'nyse opening time london', 'wall street hours'],
  }
}

export default async function StockMarketPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <StockMarketContent city={city} />
}
