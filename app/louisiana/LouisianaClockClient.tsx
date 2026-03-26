'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LOUISIANA_TZ = 'America/Chicago'
export default function LouisianaClockClient() {
  return <HeroClockDisplay tz={LOUISIANA_TZ} countryCode="US" countryName="Louisiana" tzLabel="Chicago" />
}
