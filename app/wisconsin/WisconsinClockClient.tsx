'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const WISCONSIN_TZ = 'America/Chicago'
export default function WisconsinClockClient() {
  return <HeroClockDisplay tz={WISCONSIN_TZ} countryCode="US" countryName="Wisconsin" tzLabel="Chicago" />
}
