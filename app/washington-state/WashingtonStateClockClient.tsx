'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const WASHINGTON_STATE_TZ = 'America/Los_Angeles'
export default function WashingtonStateClockClient() {
  return <HeroClockDisplay tz={WASHINGTON_STATE_TZ} countryCode="US" countryName="Washington" tzLabel="Los Angeles" />
}
