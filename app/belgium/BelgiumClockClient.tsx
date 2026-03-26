'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BELGIUM_TZ = 'Europe/Brussels'
export default function BelgiumClockClient() {
  return <HeroClockDisplay tz={BELGIUM_TZ} countryCode="BE" countryName="Belgium" tzLabel="CET · UTC+1" />
}
