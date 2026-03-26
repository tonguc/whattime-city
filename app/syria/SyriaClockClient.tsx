'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SYRIA_TZ = 'Asia/Damascus'
export default function SyriaClockClient() {
  return <HeroClockDisplay tz={SYRIA_TZ} countryCode="SY" countryName="Syria" tzLabel="EET · UTC+3" />
}
