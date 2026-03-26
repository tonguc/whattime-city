'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KAZAKHSTAN_TZ = 'Asia/Almaty'
export default function KazakhstanClockClient() {
  return <HeroClockDisplay tz={KAZAKHSTAN_TZ} countryCode="KZ" countryName="Kazakhstan" tzLabel="AQTT · UTC+5" />
}
