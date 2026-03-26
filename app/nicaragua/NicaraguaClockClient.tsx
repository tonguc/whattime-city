'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NICARAGUA_TZ = 'America/Managua'
export default function NicaraguaClockClient() {
  return <HeroClockDisplay tz={NICARAGUA_TZ} countryCode="NI" countryName="Nicaragua" tzLabel="CST · UTC-6" />
}
