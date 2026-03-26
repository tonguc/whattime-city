'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CHILE_TZ = 'America/Santiago'
export default function ChileClockClient() {
  return <HeroClockDisplay tz={CHILE_TZ} countryCode="CL" countryName="Chile" tzLabel="CLT · UTC-4" />
}
