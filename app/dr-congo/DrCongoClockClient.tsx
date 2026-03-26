'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const DR_CONGO_TZ = 'Africa/Kinshasa'
export default function DrCongoClockClient() {
  return <HeroClockDisplay tz={DR_CONGO_TZ} countryCode="CD" countryName="DR Congo" tzLabel="WAT · UTC+1" />
}
