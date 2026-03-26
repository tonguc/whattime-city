'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ISRAEL_TZ = 'Asia/Jerusalem'
export default function IsraelClockClient() {
  return <HeroClockDisplay tz={ISRAEL_TZ} countryCode="IL" countryName="Israel" tzLabel="IST · UTC+2" />
}
