'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ANGOLA_TZ = 'Africa/Luanda'
export default function AngolaClockClient() {
  return <HeroClockDisplay tz={ANGOLA_TZ} countryCode="AO" countryName="Angola" tzLabel="WAT · UTC+1" />
}
