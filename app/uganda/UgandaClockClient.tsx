'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UGANDA_TZ = 'Africa/Kampala'
export default function UgandaClockClient() {
  return <HeroClockDisplay tz={UGANDA_TZ} countryCode="UG" countryName="Uganda" tzLabel="EAT · UTC+3" />
}
