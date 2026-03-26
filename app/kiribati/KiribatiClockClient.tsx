'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KIRIBATI_TZ = 'Pacific/Tarawa'
export default function KiribatiClockClient() {
  return <HeroClockDisplay tz={KIRIBATI_TZ} countryCode="KI" countryName="Kiribati" tzLabel="GILT · UTC+12" />
}
