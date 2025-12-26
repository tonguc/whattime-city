'use client'

import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { useCityContext } from '@/lib/CityContext'
import NYCGuideContent from './content/nyc-overview'
import LondonGuideContent from './content/london-overview'
import TokyoOverviewContent from './content/tokyo-overview'
import DubaiOverviewContent from './content/dubai-overview'
import SingaporeOverviewContent from './content/singapore-overview'
import ParisOverviewContent from './content/paris-overview'
import SydneyGuideContent from './content/sydney-overview'
import LosAngelesOverviewContent from './content/los-angeles-overview'

interface Props {
  city: City
  config: GuideConfig
}

export default function GuideContent({ city, config }: Props) {
  const { isLight, time } = useCityContext()
  
  // Get current city time
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = cityTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  // Render city-specific content
  if (city.slug === 'london') {
    return <LondonGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
  
  if (city.slug === 'tokyo') {
    return <TokyoOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
  
  if (city.slug === 'dubai') {
    return <DubaiOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
  
  if (city.slug === 'singapore') {
    return <SingaporeOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
  
  if (city.slug === 'paris') {
    return <ParisOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
  
  if (city.slug === 'sydney') {
    return <SydneyGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
if (city.slug === 'los-angeles') {
  return <LosAngelesOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
}
  
  // Default to NYC
  return <NYCGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
}
