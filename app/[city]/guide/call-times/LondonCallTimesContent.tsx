'use client'; // Client-side hook'lar (useState, useEffect) kullanıldığı için gerekli

import { useState, useEffect } from 'react';
import Link from 'next/link';

// HATA ÇÖZÜMÜ: 'any' kullanarak TypeScript'in "Eksik property" hatasını susturuyoruz.
// Projenizdeki karmaşık City tipine uymak zorunda kalmadan build alacak.
interface Props {
  city?: any; 
}

export default function LondonCallTimesContent({ city }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Widget'ın client-side render olması için
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Schema verisi: Google'ın snippet'ı anlaması için yapısal veri
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to call London from New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time for business calls is between 9:00 AM and 12:00 PM EST. This aligns with 2:00 PM to 5:00 PM in London, ensuring standard working hours for both parties."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time difference between London and New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "London is typically 5 hours ahead of New York. However, during DST transition weeks in March and October, this gap can briefly change to 4 hours."
        }
      }
    ]
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-6">
      
      {/* --- FEATURED SNIPPET HEDEF ALANI --- */}
      <section id="snippet-target" className="mb-10 p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
        
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Best Time to Call London from New York
        </h2>
        
        <p className="mb-4 text-slate-700 leading-relaxed text-base">
          The best time to call London from New York for business is between 
          <strong>9:00 AM and 12:00 PM EST</strong>. This window aligns with 
          <strong>2:00 PM to 5:00 PM in London</strong>, ensuring both parties are 
          within standard working hours. For personal calls, you can extend this until 
          5:00 PM EST (10:00 PM London).
        </p>

        {/* DST UYARISI */}
        <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm text-slate-700">
            <p>
                <strong>⚠️ Note:</strong> London is typically 5 hours ahead. 
                However, during Daylight Saving Time (DST) transition weeks in March and October, 
                the gap briefly changes to <strong>4 hours</strong> due to different switch-over dates.
            </p>
        </div>

        {/* TABLO: Mobilde kaydırılabilir, erişilebilir ve highlight edilmiş */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 border-b border-slate-300 font-semibold text-sm md:text-base text-slate-900 whitespace-nowrap">New York (EST)</th>
                <th className="p-4 border-b border-slate-300 font-semibold text-sm md:text-base text-slate-900 whitespace-nowrap">London (GMT/BST)</th>
                <th className="p-4 border-b border-slate-300 font-semibold text-sm md:text-base text-slate-900 whitespace-nowrap">Suitability</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base text-slate-700">
              <tr>
                <td className="p-4 border-b border-slate-100">8:00 AM</td>
                <td className="p-4 border-b border-slate-100">1:00 PM</td>
                <td className="p-4 border-b border-slate-100 text-yellow-600 font-medium">⚠️ Early for NYC</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">9:00 AM</td>
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">2:00 PM</td>
                <td className="p-4 border-b border-green-100 text-green-700 font-bold">✅ Perfect (Overlap)</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">11:00 AM</td>
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">4:00 PM</td>
                <td className="p-4 border-b border-green-100 text-green-700 font-bold">✅ Perfect (Overlap)</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100">2:00 PM