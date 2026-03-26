'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const POLAND_TZ = 'Europe/Warsaw'
export default function PolandClockClient() {
  return <HeroClockDisplay tz={POLAND_TZ} countryCode="PL" countryName="Poland" tzLabel="CET · UTC+1" />
}
