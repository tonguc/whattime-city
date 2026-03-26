'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TURKMENISTAN_TZ = 'Asia/Ashgabat'
export default function TurkmenistanClockClient() {
  return <HeroClockDisplay tz={TURKMENISTAN_TZ} countryCode="TM" countryName="Turkmenistan" tzLabel="TMT · UTC+5" />
}
