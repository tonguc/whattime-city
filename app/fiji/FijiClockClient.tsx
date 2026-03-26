'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const FIJI_TZ = 'Pacific/Fiji'
export default function FijiClockClient() {
  return <HeroClockDisplay tz={FIJI_TZ} countryCode="FJ" countryName="Fiji" tzLabel="FJT · UTC+12" />
}
