'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TAIWAN_TZ = 'Asia/Taipei'
export default function TaiwanClockClient() {
  return <HeroClockDisplay tz={TAIWAN_TZ} countryCode="TW" countryName="Taiwan" tzLabel="TST · UTC+8" />
}
