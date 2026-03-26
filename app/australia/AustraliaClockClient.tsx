'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const AUSTRALIA_TZ = 'Australia/Sydney'
export default function AustraliaClockClient() {
  return <HeroClockDisplay tz={AUSTRALIA_TZ} countryCode="AU" countryName="Australia" tzLabel="AWST · UTC+8" />
}
