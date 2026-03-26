'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ITALY_TZ = 'Europe/Rome'
export default function ItalyClockClient() {
  return <HeroClockDisplay tz={ITALY_TZ} countryCode="IT" countryName="Italy" tzLabel="CET · UTC+1" />
}
