'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SLOVENIA_TZ = 'Europe/Ljubljana'
export default function SloveniaClockClient() {
  return <HeroClockDisplay tz={SLOVENIA_TZ} countryCode="SI" countryName="Slovenia" tzLabel="CET · UTC+1" />
}
