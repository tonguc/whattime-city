'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GREECE_TZ = 'Europe/Athens'
export default function GreeceClockClient() {
  return <HeroClockDisplay tz={GREECE_TZ} countryCode="GR" countryName="Greece" tzLabel="EET · UTC+2" />
}
