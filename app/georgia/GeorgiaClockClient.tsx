'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GEORGIA_TZ = 'Asia/Tbilisi'
export default function GeorgiaClockClient() {
  return <HeroClockDisplay tz={GEORGIA_TZ} countryCode="GE" countryName="Georgia" tzLabel="GET · UTC+4" />
}
