'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NETHERLANDS_TZ = 'Europe/Amsterdam'
export default function NetherlandsClockClient() {
  return <HeroClockDisplay tz={NETHERLANDS_TZ} countryCode="NL" countryName="Netherlands" tzLabel="CET · UTC+1" />
}
