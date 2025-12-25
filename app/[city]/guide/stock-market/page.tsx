import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import StockMarketContent from './StockMarketContent'
import LondonStockMarketContent from './LondonStockMarketContent'
import TokyoStockMarketContent from './TokyoStockMarketContent'
import DubaiStockMarketContent from './DubaiStockMarketContent'
import SingaporeStockMarketContent from './SingaporeStockMarketContent'
import ParisStockMarketContent from './ParisStockMarketContent'
import SydneyStockMarketContent from './SydneyStockMarketContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() { return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }, { city: 'singapore' }, { city: 'paris' }, { city: 'sydney' }] }

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
  
  switch (citySlug) {
    case 'london':
      return <LondonStockMarketContent city={city} />
    case 'tokyo':
      return <TokyoStockMarketContent city={city} />
    case 'dubai':
      return <DubaiStockMarketContent city={city} />
    case 'singapore':
      return <SingaporeStockMarketContent city={city} />
    case 'paris':
      return <ParisStockMarketContent city={city} />
    case 'sydney':
      return <SydneyStockMarketContent city={city} />
    default:
      return <StockMarketContent city={city} />
  }
}
