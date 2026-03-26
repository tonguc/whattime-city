'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MALTA_TZ = 'Europe/Malta'
export default function MaltaClockClient() {
  return <HeroClockDisplay tz={MALTA_TZ} countryCode="MT" countryName="Malta" tzLabel="CET · UTC+1" />
}
