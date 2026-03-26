'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const FRANCE_TZ = 'Europe/Paris'
export default function FranceClockClient() {
  return <HeroClockDisplay tz={FRANCE_TZ} countryCode="FR" countryName="France" tzLabel="CET · UTC+1" />
}
