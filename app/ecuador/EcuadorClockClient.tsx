'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ECUADOR_TZ = 'America/Guayaquil'
export default function EcuadorClockClient() {
  return <HeroClockDisplay tz={ECUADOR_TZ} countryCode="EC" countryName="Ecuador" tzLabel="ECT · UTC-5" />
}
