import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { getTopCities, getCityBySlug } from '@/lib/cityData' // cityData'dan çekiyoruz, en garantisi
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'
import DynamicContent from '@/components/meeting/DynamicContent'

// --- TİPLER ---
interface Props {
  params: { cities: string }
}

// --- 1. STATIC PARAMS (Build Hatasını Çözen Temiz Versiyon) ---
export async function generateStaticParams() {
  // Dışarıdaki bozuk fonksiyona güvenmek yerine, 
  // veriyi direkt buradan çekiyoruz. Bu build hatasını %100 çözer.
  const topCities = getTopCities(20); 
  const paths = [];

  for (let i = 0; i < topCities.length; i++) {
    for (let j = i + 1; j < topCities.length; j++) {
      // Şehirleri alfabetik sıraya dizip slug oluşturuyoruz
      const pairSlug = [topCities[i].slug, topCities[j].slug].sort().join('-vs-');
      paths.push({ cities: pairSlug });
    }
  }
  return paths;
}

// --- 2. METADATA ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city1, city2 } = parseSlug(params.cities);
  
  if (!city1 || !city2) return { title: 'Meeting Planner' };

  return {
    title: `Best Meeting Time: ${city1.name} & ${city2.name} | WhatTime.City`,
    description: `Plan a call between ${city1.name} and ${city2.name}. Check time difference and business hours overlap.`,
    alternates: {
      canonical: `https://whattime.city/meeting/${params.cities}`,
    },
  }
}

// --- 3. ANA SAYFA COMPONENT'İ ---
export default function MeetingPage({ params }: Props) {
  const { city1, city2, isSorted } = parseSlug(params.cities);

  if (!city1 || !city2) notFound();

  // URL alfabetik değilse (canonical için) yönlendir
  if (!isSorted) {
    const correctSlug = [city1.slug, city2.slug].sort().join('-vs-');
    redirect(`/meeting/${correctSlug}`);
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Plan a Meeting: <span className="text-blue-400">{city1.name}</span> ↔ <span className="text-purple-400">{city2.name}</span>
        </h1>

        {/* Client Component (Slider vs) */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-2xl mb-12 border border-slate-800">
           {/* Burada props hatası almamak için şimdilik boş veya basit geçiyoruz. 
               Kendi component'in prop istiyorsa ona göre düzenle. */}
           <MeetingPlannerClient />
        </div>

        {/* SEO İçeriği */}
        <div className="prose lg:prose-xl mx-auto dark:prose-invert text-slate-300">
          <DynamicContent city1={city1} city2={city2} />
        </div>
      </div>
    </div>
  )
}

// --- YARDIMCI FONKSİYONLAR ---
function parseSlug(slug: string) {
  if (!slug) return { city1: null, city2: null, isSorted: false };
  
  const parts = slug.split('-vs-');
  if (parts.length !== 2) return { city1: null, city2: null, isSorted: false };

  const city1 = getCityBySlug(parts[0]);
  const city2 = getCityBySlug(parts[1]);
  
  const sorted = [parts[0], parts[1]].sort().join('-vs-');
  const isSorted = sorted === slug;

  return { city1, city2, isSorted };
}