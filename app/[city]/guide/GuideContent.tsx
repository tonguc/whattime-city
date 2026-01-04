'use client'

import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { useCityContext } from '@/lib/CityContext'

// Premium city-specific content (7 custom + 1 generic for Istanbul)
import NYCGuideContent from './content/nyc-overview'
import LondonGuideContent from './content/london-overview'
import TokyoOverviewContent from './content/tokyo-overview'
import DubaiOverviewContent from './content/dubai-overview'
import SingaporeOverviewContent from './content/singapore-overview'
import ParisOverviewContent from './content/paris-overview'
import SydneyGuideContent from './content/sydney-overview'
import GenericGuideContent from './content/generic-overview'

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
  
  // Render city-specific premium content
  switch (city.slug) {
    case 'new-york':
      return <NYCGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'london':
      return <LondonGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'tokyo':
      return <TokyoOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'dubai':
      return <DubaiOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'singapore':
      return <SingaporeOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'paris':
      return <ParisOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'sydney':
      return <SydneyGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'istanbul':
      // Istanbul uses generic until custom content is created
      return <GenericGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    // Should not reach here - 404 handled by page.tsx
    default:
      return <GenericGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
}
