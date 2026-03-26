'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const HONDURAS_TZ = 'America/Tegucigalpa'
export default function HondurasClockClient() {
  return <HeroClockDisplay tz={HONDURAS_TZ} countryCode="HN" countryName="Honduras" tzLabel="CST · UTC-6" />
}
