'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NIGER_TZ = 'Africa/Niamey'
export default function NigerClockClient() {
  return <HeroClockDisplay tz={NIGER_TZ} countryCode="NE" countryName="Niger" tzLabel="WAT · UTC+1" />
}
