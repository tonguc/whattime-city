'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const RUSSIA_TZ = 'Europe/Moscow'
export default function RussiaClockClient() {
  return <HeroClockDisplay tz={RUSSIA_TZ} countryCode="RU" countryName="Russia" tzLabel="KALT · UTC+2" />
}
