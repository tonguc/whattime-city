'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BHUTAN_TZ = 'Asia/Thimphu'
export default function BhutanClockClient() {
  return <HeroClockDisplay tz={BHUTAN_TZ} countryCode="BT" countryName="Bhutan" tzLabel="BTT · UTC+6" />
}
