'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NAURU_TZ = 'Pacific/Nauru'
export default function NauruClockClient() {
  return <HeroClockDisplay tz={NAURU_TZ} countryCode="NR" countryName="Nauru" tzLabel="NRT · UTC+12" />
}
