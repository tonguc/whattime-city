'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PUERTO_RICO_TZ = 'America/Puerto_Rico'
export default function PuertoRicoClockClient() {
  return <HeroClockDisplay tz={PUERTO_RICO_TZ} countryCode="PR" countryName="Puerto Rico" tzLabel="AST · UTC-4" />
}
