'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GERMANY_TZ = 'Europe/Berlin'
export default function GermanyClockClient() {
  return <HeroClockDisplay tz={GERMANY_TZ} countryCode="DE" countryName="Germany" tzLabel="CET · UTC+1" />
}
