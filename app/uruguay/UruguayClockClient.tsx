'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const URUGUAY_TZ = 'America/Montevideo'
export default function UruguayClockClient() {
  return <HeroClockDisplay tz={URUGUAY_TZ} countryCode="UY" countryName="Uruguay" tzLabel="UYT · UTC-3" />
}
