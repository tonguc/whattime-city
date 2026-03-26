'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LIBYA_TZ = 'Africa/Tripoli'
export default function LibyaClockClient() {
  return <HeroClockDisplay tz={LIBYA_TZ} countryCode="LY" countryName="Libya" tzLabel="EET · UTC+2" />
}
