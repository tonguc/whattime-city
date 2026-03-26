'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CONNECTICUT_TZ = 'America/New_York'
export default function ConnecticutClockClient() {
  return <HeroClockDisplay tz={CONNECTICUT_TZ} countryCode="US" countryName="Connecticut" tzLabel="New York" />
}
