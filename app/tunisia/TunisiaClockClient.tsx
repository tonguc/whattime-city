'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TUNISIA_TZ = 'Africa/Tunis'
export default function TunisiaClockClient() {
  return <HeroClockDisplay tz={TUNISIA_TZ} countryCode="TN" countryName="Tunisia" tzLabel="CET · UTC+1" />
}
