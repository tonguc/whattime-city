'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PARAGUAY_TZ = 'America/Asuncion'
export default function ParaguayClockClient() {
  return <HeroClockDisplay tz={PARAGUAY_TZ} countryCode="PY" countryName="Paraguay" tzLabel="PYT · UTC-4" />
}
