'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BOSNIA_AND_HERZEGOVINA_TZ = 'Europe/Sarajevo'
export default function BosniaAndHerzegovinaClockClient() {
  return <HeroClockDisplay tz={BOSNIA_AND_HERZEGOVINA_TZ} countryCode="BA" countryName="Bosnia and Herzegovina" tzLabel="CET · UTC+1" />
}
