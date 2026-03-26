'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MADAGASCAR_TZ = 'Indian/Antananarivo'
export default function MadagascarClockClient() {
  return <HeroClockDisplay tz={MADAGASCAR_TZ} countryCode="MG" countryName="Madagascar" tzLabel="EAT · UTC+3" />
}
