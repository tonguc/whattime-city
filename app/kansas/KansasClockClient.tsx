'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KANSAS_TZ = 'America/Chicago'
export default function KansasClockClient() {
  return <HeroClockDisplay tz={KANSAS_TZ} countryCode="US" countryName="Kansas" tzLabel="Chicago" />
}
