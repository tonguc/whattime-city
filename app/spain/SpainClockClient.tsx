'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SPAIN_TZ = 'Europe/Madrid'
export default function SpainClockClient() {
  return <HeroClockDisplay tz={SPAIN_TZ} countryCode="ES" countryName="Spain" tzLabel="CET · UTC+1" />
}
