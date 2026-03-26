'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MONACO_TZ = 'Europe/Paris'
export default function MonacoClockClient() {
  return <HeroClockDisplay tz={MONACO_TZ} countryCode="MC" countryName="Monaco" tzLabel="CET · UTC+1" />
}
