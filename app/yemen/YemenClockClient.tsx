'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const YEMEN_TZ = 'Asia/Aden'
export default function YemenClockClient() {
  return <HeroClockDisplay tz={YEMEN_TZ} countryCode="YE" countryName="Yemen" tzLabel="AST · UTC+3" />
}
