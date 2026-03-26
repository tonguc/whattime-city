'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SAMOA_TZ = 'Pacific/Apia'
export default function SamoaClockClient() {
  return <HeroClockDisplay tz={SAMOA_TZ} countryCode="WS" countryName="Samoa" tzLabel="WST · UTC+13" />
}
