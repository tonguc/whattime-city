'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MOZAMBIQUE_TZ = 'Africa/Maputo'
export default function MozambiqueClockClient() {
  return <HeroClockDisplay tz={MOZAMBIQUE_TZ} countryCode="MZ" countryName="Mozambique" tzLabel="CAT · UTC+2" />
}
