'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const IRAN_TZ = 'Asia/Tehran'
export default function IranClockClient() {
  return <HeroClockDisplay tz={IRAN_TZ} countryCode="IR" countryName="Iran" tzLabel="IRST · UTC+3:30" />
}
