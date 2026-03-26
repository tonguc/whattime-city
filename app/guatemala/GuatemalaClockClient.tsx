'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GUATEMALA_TZ = 'America/Guatemala'
export default function GuatemalaClockClient() {
  return <HeroClockDisplay tz={GUATEMALA_TZ} countryCode="GT" countryName="Guatemala" tzLabel="CST · UTC-6" />
}
