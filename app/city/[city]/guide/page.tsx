// app/city/[city]/guide/page.tsx
// NOT: Server Component - 'use client' YOK

import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuickTimeFinder from '@/components/QuickTimeFinder';
import { cityGuides } from '@/data/cityGuides';

// Server Component - params prop'tan geliyor
interface PageProps {
  params: {
    city: string;
  };
}

export default function CityGuidePage({ params }: PageProps) {
  const citySlug = params.city;
  
  // City data'sını al
  const cityData = cityGuides[citySlug];
  
  // Şehir bulunamazsa 404
  if (!cityData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8 text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>›</span>
          <Link href={`/city/${citySlug}`} className="hover:text-white transition">
            {cityData.city}
          </Link>
          <span>›</span>
          <span className="text-white">Guide</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8">{cityData.city} Guide</h1>

        {/* QUICK TIME FINDER - YENİ KONUM (Navigation Grid'den ÖNCE) */}
        <QuickTimeFinder
          currentCity={cityData.city}
          currentTimezone={cityData.timezone}
          otherCities={cityData.quickTimeCities}
        />

        {/* Guide Navigation Grid - 11 items */}
        <div className="space-y-4">
          {cityData.subPages.map((page) => (
            <Link
              key={page.slug}
              href={`/city/${citySlug}/guide/${page.slug}`}
              className="block"
            >
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800 hover:border-slate-700">
                <span className="text-3xl">{page.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {page.title}
                  </h3>
                  {page.description && (
                    <p className="text-sm text-gray-400 mt-1">
                      {page.description}
                    </p>
                  )}
                </div>
                <span className="text-gray-600">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Tools - Alt kısımda */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-400 uppercase tracking-wide">
            Quick Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/tools/converter">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-lg hover:from-orange-800/40 hover:to-orange-700/30 transition-colors border border-orange-700/30">
                <span className="text-2xl">⏰</span>
                <span className="font-semibold text-orange-300">Time Converter</span>
              </div>
            </Link>
            <Link href="/tools/meeting-planner">
              <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors border border-slate-700">
                <span className="text-2xl">📅</span>
                <span className="font-semibold">Meeting Planner</span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

// Metadata generation (SEO için)
export async function generateMetadata({ params }: PageProps) {
  const cityData = cityGuides[params.city];
  
  if (!cityData) {
    return {
      title: 'City Not Found',
    };
  }
  
  return {
    title: `${cityData.city} Guide | WhatTime.City`,
    description: `Complete guide to ${cityData.city}: business hours, time zone tips, travel info, and more.`,
  };
}

// Static Generation için (Next.js)
export async function generateStaticParams() {
  // Tüm şehir slug'larını döndür
  const cities = Object.keys(cityGuides);
  
  return cities.map((city) => ({
    city: city,
  }));
}
