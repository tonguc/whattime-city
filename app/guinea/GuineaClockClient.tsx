'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GUINEA_TZ = 'Africa/Conakry'
export default function GuineaClockClient() {
  return <HeroClockDisplay tz={GUINEA_TZ} countryCode="GN" countryName="Guinea" tzLabel="GMT · UTC+0" />
}
