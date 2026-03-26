'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BANGLADESH_TZ = 'Asia/Dhaka'
export default function BangladeshClockClient() {
  return <HeroClockDisplay tz={BANGLADESH_TZ} countryCode="BD" countryName="Bangladesh" tzLabel="BST · UTC+6" />
}
