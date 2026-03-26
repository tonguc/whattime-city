'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MASSACHUSETTS_TZ = 'America/New_York'
export default function MassachusettsClockClient() {
  return <HeroClockDisplay tz={MASSACHUSETTS_TZ} countryCode="US" countryName="Massachusetts" tzLabel="New York" />
}
