'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TEXAS_TZ = 'America/Chicago'
export default function TexasClockClient() {
  return <HeroClockDisplay tz={TEXAS_TZ} countryCode="US" countryName="Texas" tzLabel="Chicago" />
}
