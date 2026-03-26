'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const OREGON_TZ = 'America/Los_Angeles'
export default function OregonClockClient() {
  return <HeroClockDisplay tz={OREGON_TZ} countryCode="US" countryName="Oregon" tzLabel="Los Angeles" />
}
