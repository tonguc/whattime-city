'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UNITED_STATES_TZ = 'America/New_York'
export default function UnitedStatesClockClient() {
  return <HeroClockDisplay tz={UNITED_STATES_TZ} countryCode="US" countryName="United States" tzLabel="EST · UTC-5" />
}
