'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GAMBIA_TZ = 'Africa/Banjul'
export default function GambiaClockClient() {
  return <HeroClockDisplay tz={GAMBIA_TZ} countryCode="GM" countryName="Gambia" tzLabel="GMT · UTC+0" />
}
