'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LUXEMBOURG_TZ = 'Europe/Luxembourg'
export default function LuxembourgClockClient() {
  return <HeroClockDisplay tz={LUXEMBOURG_TZ} countryCode="LU" countryName="Luxembourg" tzLabel="CET · UTC+1" />
}
