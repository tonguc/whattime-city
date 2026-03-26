'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CANADA_TZ = 'America/Toronto'
export default function CanadaClockClient() {
  return <HeroClockDisplay tz={CANADA_TZ} countryCode="CA" countryName="Canada" tzLabel="NST · UTC-3:30" />
}
