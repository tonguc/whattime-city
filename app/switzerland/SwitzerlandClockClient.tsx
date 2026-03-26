'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SWITZERLAND_TZ = 'Europe/Zurich'
export default function SwitzerlandClockClient() {
  return <HeroClockDisplay tz={SWITZERLAND_TZ} countryCode="CH" countryName="Switzerland" tzLabel="CET · UTC+1" />
}
