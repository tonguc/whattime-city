'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const OMAN_TZ = 'Asia/Muscat'
export default function OmanClockClient() {
  return <HeroClockDisplay tz={OMAN_TZ} countryCode="OM" countryName="Oman" tzLabel="GST · UTC+4" />
}
