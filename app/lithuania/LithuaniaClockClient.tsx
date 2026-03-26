'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LITHUANIA_TZ = 'Europe/Vilnius'
export default function LithuaniaClockClient() {
  return <HeroClockDisplay tz={LITHUANIA_TZ} countryCode="LT" countryName="Lithuania" tzLabel="EET · UTC+2" />
}
