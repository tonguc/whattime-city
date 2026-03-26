'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PALAU_TZ = 'Pacific/Palau'
export default function PalauClockClient() {
  return <HeroClockDisplay tz={PALAU_TZ} countryCode="PW" countryName="Palau" tzLabel="PWT · UTC+9" />
}
