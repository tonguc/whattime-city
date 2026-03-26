'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const VANUATU_TZ = 'Pacific/Efate'
export default function VanuatuClockClient() {
  return <HeroClockDisplay tz={VANUATU_TZ} countryCode="VU" countryName="Vanuatu" tzLabel="VUT · UTC+11" />
}
