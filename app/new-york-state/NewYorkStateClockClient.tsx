'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEW_YORK_STATE_TZ = 'America/New_York'
export default function NewYorkStateClockClient() {
  return <HeroClockDisplay tz={NEW_YORK_STATE_TZ} countryCode="US" countryName="New York" tzLabel="New York" />
}
