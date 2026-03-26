'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const INDIANA_TZ = 'America/Indiana/Indianapolis'
export default function IndianaClockClient() {
  return <HeroClockDisplay tz={INDIANA_TZ} countryCode="US" countryName="Indiana" tzLabel="Indianapolis" />
}
