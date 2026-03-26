'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ROMANIA_TZ = 'Europe/Bucharest'
export default function RomaniaClockClient() {
  return <HeroClockDisplay tz={ROMANIA_TZ} countryCode="RO" countryName="Romania" tzLabel="EET · UTC+2" />
}
