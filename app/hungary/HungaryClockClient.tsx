'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const HUNGARY_TZ = 'Europe/Budapest'
export default function HungaryClockClient() {
  return <HeroClockDisplay tz={HUNGARY_TZ} countryCode="HU" countryName="Hungary" tzLabel="CET · UTC+1" />
}
