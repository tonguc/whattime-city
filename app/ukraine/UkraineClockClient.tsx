'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UKRAINE_TZ = 'Europe/Kiev'
export default function UkraineClockClient() {
  return <HeroClockDisplay tz={UKRAINE_TZ} countryCode="UA" countryName="Ukraine" tzLabel="EET · UTC+2" />
}
