'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GEORGIA_STATE_TZ = 'America/New_York'
export default function GeorgiaStateClockClient() {
  return <HeroClockDisplay tz={GEORGIA_STATE_TZ} countryCode="US" countryName="Georgia" tzLabel="New York" />
}
