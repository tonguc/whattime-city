'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NIGERIA_TZ = 'Africa/Lagos'
export default function NigeriaClockClient() {
  return <HeroClockDisplay tz={NIGERIA_TZ} countryCode="NG" countryName="Nigeria" tzLabel="WAT · UTC+1" />
}
