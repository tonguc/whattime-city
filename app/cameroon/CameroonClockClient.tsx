'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CAMEROON_TZ = 'Africa/Douala'
export default function CameroonClockClient() {
  return <HeroClockDisplay tz={CAMEROON_TZ} countryCode="CM" countryName="Cameroon" tzLabel="WAT · UTC+1" />
}
