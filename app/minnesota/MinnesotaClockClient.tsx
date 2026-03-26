'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MINNESOTA_TZ = 'America/Chicago'
export default function MinnesotaClockClient() {
  return <HeroClockDisplay tz={MINNESOTA_TZ} countryCode="US" countryName="Minnesota" tzLabel="Chicago" />
}
