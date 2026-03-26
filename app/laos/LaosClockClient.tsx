'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LAOS_TZ = 'Asia/Vientiane'
export default function LaosClockClient() {
  return <HeroClockDisplay tz={LAOS_TZ} countryCode="LA" countryName="Laos" tzLabel="ICT · UTC+7" />
}
