'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PAKISTAN_TZ = 'Asia/Karachi'
export default function PakistanClockClient() {
  return <HeroClockDisplay tz={PAKISTAN_TZ} countryCode="PK" countryName="Pakistan" tzLabel="PKT · UTC+5" />
}
