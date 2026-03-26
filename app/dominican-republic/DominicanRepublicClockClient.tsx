'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const DOMINICAN_REPUBLIC_TZ = 'America/Santo_Domingo'
export default function DominicanRepublicClockClient() {
  return <HeroClockDisplay tz={DOMINICAN_REPUBLIC_TZ} countryCode="DO" countryName="Dominican Republic" tzLabel="AST · UTC-4" />
}
