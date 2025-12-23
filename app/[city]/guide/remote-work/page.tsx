import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import RemoteWorkContent from './RemoteWorkContent'
import LondonRemoteWorkContent from './LondonRemoteWorkContent'
import TokyoRemoteWorkContent from './TokyoRemoteWorkContent'
import DubaiRemoteWorkContent from './DubaiRemoteWorkContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Remote Work Guide' }
  return {
    title: config.pages.remoteWork.title,
    description: config.pages.remoteWork.description,
    keywords: config.pages.remoteWork.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/remote-work/` },
  }
}

export default async function RemoteWorkPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonRemoteWorkContent city={city} />
  if (citySlug === 'tokyo') return <TokyoRemoteWorkContent city={city} />
  if (citySlug === 'dubai') return <DubaiRemoteWorkContent city={city} />
  return <RemoteWorkContent city={city} />
}
