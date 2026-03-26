'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CHINA_TZ = 'Asia/Shanghai'
export default function ChinaClockClient() {
  return <HeroClockDisplay tz={CHINA_TZ} countryCode="CN" countryName="China" tzLabel="CST · UTC+8" />
}
