'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KYRGYZSTAN_TZ = 'Asia/Bishkek'
export default function KyrgyzstanClockClient() {
  return <HeroClockDisplay tz={KYRGYZSTAN_TZ} countryCode="KG" countryName="Kyrgyzstan" tzLabel="KGT · UTC+6" />
}
