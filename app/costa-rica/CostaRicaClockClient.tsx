'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const COSTA_RICA_TZ = 'America/Costa_Rica'
export default function CostaRicaClockClient() {
  return <HeroClockDisplay tz={COSTA_RICA_TZ} countryCode="CR" countryName="Costa Rica" tzLabel="CST · UTC-6" />
}
