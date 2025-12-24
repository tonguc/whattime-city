export const dynamic = 'force-dynamic'
export const revalidate = 0
export const dynamicParams = true
export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import EmbedClockWidget from '@/components/EmbedClockWidget'

interface EmbedPageProps {
  params: {
    city: string
  }
  searchParams: {
    theme?: string
    size?: string
    showDate?: string
    showTimezone?: string
    transparent?: string
  }
}

export default async function EmbedPage({
  params,
  searchParams,
}: EmbedPageProps) {
  const citySlug = params.city
  const city = cities.find(c => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  return (
    <>
      <head>
        <title>{city.city} Clock Widget – whattime.city</title>
        <meta
          name="description"
          content={`Embeddable clock widget for ${city.city}, ${city.country}`}
        />
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <EmbedClockWidget
        city={city}
        theme={searchParams.theme || 'auto'}
        size={searchParams.size || 'medium'}
        showDate={searchParams.showDate !== 'false'}
        showTimezone={searchParams.showTimezone !== 'false'}
        transparent={searchParams.transparent === 'true'}
      />
    </>
  )
}
