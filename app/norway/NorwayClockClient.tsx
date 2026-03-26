'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NORWAY_TZ = 'Europe/Oslo'
export default function NorwayClockClient() {
  return <HeroClockDisplay tz={NORWAY_TZ} countryCode="NO" countryName="Norway" tzLabel="CET · UTC+1" />
}
