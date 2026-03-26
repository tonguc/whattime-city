'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MONTENEGRO_TZ = 'Europe/Podgorica'
export default function MontenegroClockClient() {
  return <HeroClockDisplay tz={MONTENEGRO_TZ} countryCode="ME" countryName="Montenegro" tzLabel="CET · UTC+1" />
}
