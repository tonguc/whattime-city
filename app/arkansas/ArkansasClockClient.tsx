'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ARKANSAS_TZ = 'America/Chicago'
export default function ArkansasClockClient() {
  return <HeroClockDisplay tz={ARKANSAS_TZ} countryCode="US" countryName="Arkansas" tzLabel="Chicago" />
}
