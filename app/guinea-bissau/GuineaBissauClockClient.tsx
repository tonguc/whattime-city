'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GUINEA_BISSAU_TZ = 'Africa/Bissau'
export default function GuineaBissauClockClient() {
  return <HeroClockDisplay tz={GUINEA_BISSAU_TZ} countryCode="GW" countryName="Guinea-Bissau" tzLabel="GMT · UTC+0" />
}
