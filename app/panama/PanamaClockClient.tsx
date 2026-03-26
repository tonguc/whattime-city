'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PANAMA_TZ = 'America/Panama'
export default function PanamaClockClient() {
  return <HeroClockDisplay tz={PANAMA_TZ} countryCode="PA" countryName="Panama" tzLabel="EST · UTC-5" />
}
