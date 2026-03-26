'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEBRASKA_TZ = 'America/Chicago'
export default function NebraskaClockClient() {
  return <HeroClockDisplay tz={NEBRASKA_TZ} countryCode="US" countryName="Nebraska" tzLabel="Chicago" />
}
