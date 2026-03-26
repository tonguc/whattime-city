'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MISSOURI_TZ = 'America/Chicago'
export default function MissouriClockClient() {
  return <HeroClockDisplay tz={MISSOURI_TZ} countryCode="US" countryName="Missouri" tzLabel="Chicago" />
}
