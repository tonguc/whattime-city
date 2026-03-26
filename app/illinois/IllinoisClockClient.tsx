'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ILLINOIS_TZ = 'America/Chicago'
export default function IllinoisClockClient() {
  return <HeroClockDisplay tz={ILLINOIS_TZ} countryCode="US" countryName="Illinois" tzLabel="Chicago" />
}
