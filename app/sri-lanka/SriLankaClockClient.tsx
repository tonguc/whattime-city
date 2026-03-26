'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SRI_LANKA_TZ = 'Asia/Colombo'
export default function SriLankaClockClient() {
  return <HeroClockDisplay tz={SRI_LANKA_TZ} countryCode="LK" countryName="Sri Lanka" tzLabel="IST · UTC+5:30" />
}
