'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const INDIA_TZ = 'Asia/Kolkata'
export default function IndiaClockClient() {
  return <HeroClockDisplay tz={INDIA_TZ} countryCode="IN" countryName="India" tzLabel="IST · UTC+5:30" />
}
