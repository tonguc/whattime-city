'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const AFGHANISTAN_TZ = 'Asia/Kabul'
export default function AfghanistanClockClient() {
  return <HeroClockDisplay tz={AFGHANISTAN_TZ} countryCode="AF" countryName="Afghanistan" tzLabel="AFT · UTC+4:30" />
}
