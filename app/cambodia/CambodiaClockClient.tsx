'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CAMBODIA_TZ = 'Asia/Phnom_Penh'
export default function CambodiaClockClient() {
  return <HeroClockDisplay tz={CAMBODIA_TZ} countryCode="KH" countryName="Cambodia" tzLabel="ICT · UTC+7" />
}
