'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UZBEKISTAN_TZ = 'Asia/Tashkent'
export default function UzbekistanClockClient() {
  return <HeroClockDisplay tz={UZBEKISTAN_TZ} countryCode="UZ" countryName="Uzbekistan" tzLabel="UZT · UTC+5" />
}
