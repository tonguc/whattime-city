import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import StockMarketContent from './StockMarketContent'
import LondonStockMarketContent from './LondonStockMarketContent'
import TokyoStockMarketContent from './TokyoStockMarketContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() { return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }] }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  
  if (!config) return { title: 'Stock Market Hours' }
  
  return {
    title: config.pages.stockMarket.title,
    description: config.pages.stockMarket.description,
    keywords: config.pages.stockMarket.keywords,
    openGraph: {
      title: config.pages.stockMarket.title,
      description: config.pages.stockMarket.description,
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
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  if (citySlug === 'london') {
    return <LondonStockMarketContent city={city} />
  }
  
  return <StockMarketContent city={city} />
}
