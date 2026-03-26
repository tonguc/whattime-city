'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TANZANIA_TZ = 'Africa/Dar_es_Salaam'
export default function TanzaniaClockClient() {
  return <HeroClockDisplay tz={TANZANIA_TZ} countryCode="TZ" countryName="Tanzania" tzLabel="EAT · UTC+3" />
}
