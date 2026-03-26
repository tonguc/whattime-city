'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CONGO_TZ = 'Africa/Brazzaville'
export default function CongoClockClient() {
  return <HeroClockDisplay tz={CONGO_TZ} countryCode="CG" countryName="Congo" tzLabel="WAT · UTC+1" />
}
