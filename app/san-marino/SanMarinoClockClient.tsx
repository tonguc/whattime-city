'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SAN_MARINO_TZ = 'Europe/San_Marino'
export default function SanMarinoClockClient() {
  return <HeroClockDisplay tz={SAN_MARINO_TZ} countryCode="SM" countryName="San Marino" tzLabel="CET · UTC+1" />
}
