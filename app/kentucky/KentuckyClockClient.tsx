'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KENTUCKY_TZ = 'America/New_York'
export default function KentuckyClockClient() {
  return <HeroClockDisplay tz={KENTUCKY_TZ} countryCode="US" countryName="Kentucky" tzLabel="New York" />
}
