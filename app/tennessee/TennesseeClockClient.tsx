'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TENNESSEE_TZ = 'America/Chicago'
export default function TennesseeClockClient() {
  return <HeroClockDisplay tz={TENNESSEE_TZ} countryCode="US" countryName="Tennessee" tzLabel="Chicago" />
}
