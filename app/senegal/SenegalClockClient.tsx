'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SENEGAL_TZ = 'Africa/Dakar'
export default function SenegalClockClient() {
  return <HeroClockDisplay tz={SENEGAL_TZ} countryCode="SN" countryName="Senegal" tzLabel="GMT · UTC+0" />
}
