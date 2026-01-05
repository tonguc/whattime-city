'use client'

import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { useCityContext } from '@/lib/CityContext'

// Premium city-specific content (15 custom cities)
import NYCGuideContent from './content/nyc-overview'
import LondonGuideContent from './content/london-overview'
import TokyoOverviewContent from './content/tokyo-overview'
import DubaiOverviewContent from './content/dubai-overview'
import SingaporeOverviewContent from './content/singapore-overview'
import ParisOverviewContent from './content/paris-overview'
import SydneyGuideContent from './content/sydney-overview'
import IstanbulOverviewContent from './content/istanbul-overview'
import LosAngelesOverviewContent from './content/los-angeles-overview'
import HongKongOverviewContent from './content/hong-kong-overview'
import TorontoOverviewContent from './content/toronto-overview'
import ShanghaiOverviewContent from './content/shanghai-overview'
import SeoulOverviewContent from './content/seoul-overview'
import BerlinOverviewContent from './content/berlin-overview'
import AmsterdamOverviewContent from './content/amsterdam-overview'
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
      return <IstanbulOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'los-angeles':
      return <LosAngelesOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'hong-kong':
      return <HongKongOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'toronto':
      return <TorontoOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'shanghai':
      return <ShanghaiOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'seoul':
      return <SeoulOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'berlin':
      return <BerlinOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    case 'amsterdam':
      return <AmsterdamOverviewContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
    
    // Should not reach here - 404 handled by page.tsx
    default:
      return <GenericGuideContent city={city} config={config} isLight={isLight} timeStr={timeStr} />
  }
}
