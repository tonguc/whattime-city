'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const INDONESIA_TZ = 'Asia/Jakarta'
export default function IndonesiaClockClient() {
  return <HeroClockDisplay tz={INDONESIA_TZ} countryCode="ID" countryName="Indonesia" tzLabel="WIB · UTC+7" />
}
