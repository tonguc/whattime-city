'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MICHIGAN_TZ = 'America/Detroit'
export default function MichiganClockClient() {
  return <HeroClockDisplay tz={MICHIGAN_TZ} countryCode="US" countryName="Michigan" tzLabel="Detroit" />
}
