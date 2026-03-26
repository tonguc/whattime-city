'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const OKLAHOMA_TZ = 'America/Chicago'
export default function OklahomaClockClient() {
  return <HeroClockDisplay tz={OKLAHOMA_TZ} countryCode="US" countryName="Oklahoma" tzLabel="Chicago" />
}
