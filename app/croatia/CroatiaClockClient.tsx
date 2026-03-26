'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CROATIA_TZ = 'Europe/Zagreb'
export default function CroatiaClockClient() {
  return <HeroClockDisplay tz={CROATIA_TZ} countryCode="HR" countryName="Croatia" tzLabel="CET · UTC+1" />
}
