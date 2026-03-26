'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ARIZONA_TZ = 'America/Phoenix'
export default function ArizonaClockClient() {
  return <HeroClockDisplay tz={ARIZONA_TZ} countryCode="US" countryName="Arizona" tzLabel="Phoenix" />
}
