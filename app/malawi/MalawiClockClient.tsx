'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MALAWI_TZ = 'Africa/Blantyre'
export default function MalawiClockClient() {
  return <HeroClockDisplay tz={MALAWI_TZ} countryCode="MW" countryName="Malawi" tzLabel="CAT · UTC+2" />
}
