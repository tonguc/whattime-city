'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TRINIDAD_AND_TOBAGO_TZ = 'America/Port_of_Spain'
export default function TrinidadAndTobagoClockClient() {
  return <HeroClockDisplay tz={TRINIDAD_AND_TOBAGO_TZ} countryCode="TT" countryName="Trinidad and Tobago" tzLabel="AST · UTC-4" />
}
