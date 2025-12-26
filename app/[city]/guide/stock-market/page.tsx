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
import LosAngelesStockMarketContent from './LosAngelesStockMarketContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [
    { city: 'new-york' },
    { city: 'london' },
    { city: 'tokyo' },
    { city: 'dubai' },
    { city: 'singapore' },
    { city: 'paris' },
    { city: 'sydney' },
    { city: 'los-angeles' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  
  if (!config) return { title: 'StockMarket' }
  
  // Dynamically access the correct page config
  const pageKey = 'stock-market'.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/-/g, '')
  const pageConfig = (config.pages as any)[pageKey]
  
  return {
    title: pageConfig?.title || 'StockMarket',
    description: pageConfig?.description || '',
    keywords: pageConfig?.keywords || [],
    openGraph: {
      title: pageConfig?.title || 'StockMarket',
      description: pageConfig?.description || '',
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
    case 'los-angeles':
      return <LosAngelesStockMarketContent city={city} />
    default:
      return <StockMarketContent city={city} />
  }
}
