'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CZECH_REPUBLIC_TZ = 'Europe/Prague'
export default function CzechRepublicClockClient() {
  return <HeroClockDisplay tz={CZECH_REPUBLIC_TZ} countryCode="CZ" countryName="Czech Republic" tzLabel="CET · UTC+1" />
}
