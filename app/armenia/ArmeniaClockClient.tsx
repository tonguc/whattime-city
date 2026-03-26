'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ARMENIA_TZ = 'Asia/Yerevan'
export default function ArmeniaClockClient() {
  return <HeroClockDisplay tz={ARMENIA_TZ} countryCode="AM" countryName="Armenia" tzLabel="AMT · UTC+4" />
}
