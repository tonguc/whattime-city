'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BARBADOS_TZ = 'America/Barbados'
export default function BarbadosClockClient() {
  return <HeroClockDisplay tz={BARBADOS_TZ} countryCode="BB" countryName="Barbados" tzLabel="AST · UTC-4" />
}
