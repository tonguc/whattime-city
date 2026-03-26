'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PENNSYLVANIA_TZ = 'America/New_York'
export default function PennsylvaniaClockClient() {
  return <HeroClockDisplay tz={PENNSYLVANIA_TZ} countryCode="US" countryName="Pennsylvania" tzLabel="New York" />
}
