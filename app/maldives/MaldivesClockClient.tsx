'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MALDIVES_TZ = 'Indian/Maldives'
export default function MaldivesClockClient() {
  return <HeroClockDisplay tz={MALDIVES_TZ} countryCode="MV" countryName="Maldives" tzLabel="MVT · UTC+5" />
}
