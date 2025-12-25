'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// HATA 1 ÇÖZÜMÜ: TypeScript'in "Eksik veri" uyarısını susturmak için 'any' kullanıyoruz.
interface Props {
  city?: any;
}

export default function LondonCallTimesContent({ city }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Schema verisi (SEO için)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to call London from New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time for business calls is between 9:00 AM and 12:00 PM EST. This aligns with 2:00 PM to 5:00 PM in London."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time difference between London and New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "London is typically 5 hours ahead of New York. During DST changes, this gap may briefly become 4 hours."
        }
      }
    ]
  };

  // HATA 2 ÇÖZÜMÜ: Return bloğu temizlendi ve syntax hataları giderildi.
  return (
    <article className="max-w-4xl mx-auto px-4 py-6">
      
      {/* --- FEATURED SNIPPET ALANI --- */}
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

        {/* DST Uyarı Kutusu */}
        <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm text-slate-700">
            <p>
                <strong>⚠️ Note:</strong> London is typically 5 hours ahead. 
                However, during Daylight Saving Time (DST) transition weeks, 
                the gap briefly changes to <strong>4 hours</strong>.
            </p>
        </div>

        {/* Zaman Tablosu */}
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
                <td className="p-4 border-b border-slate-100">2:00 PM</td>
                <td className="p-4 border-b border-slate-100">7:00 PM</td>
                <td className="p-4 border-b border-slate-100 text-yellow-600 font-medium">⚠️ Late for London</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100">5:00 PM</td>
                <td className="p-4 border-b border-slate-100">10:00 PM</td>
                <td className="p-4 border-b border-slate-100 text-red-600 font-medium">❌ Avoid (Too Late)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- TERS YÖN (REVERSE DIRECTION) --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Time to Call New York from London</h2>
        <p className="text-slate-700 leading-relaxed text-base mb-4">
           If you are starting the call from London, your ideal window is restricted to your afternoon.
           New York generally starts work when it is already 2:00 PM in London.
        </p>
        
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">Quick Reference (London Perspective)</h3>
            <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                    <span>🌅</span> 
                    <span><strong>2 PM - 5 PM:</strong> Best for business (Catches NYC 9 AM - 12 PM)</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>🌆</span> 
                    <span><strong>6 PM - 9 PM:</strong> Good for personal calls (NYC Afternoon)</span>
                </li>
            </ul>
        </div>
      </section>

      {/* --- LIVE WIDGET YER TUTUCU --- */}
      <section className="my-12">
        {!isLoaded ? (
           <div className="w-full h-48 bg-slate-100 animate-pulse rounded-lg"></div> 
        ) : (
           <div className="p-6 text-center border border-dashed border-slate-300 rounded-lg bg-slate-50 text-slate-500">
             <span className="block text-sm font-semibold mb-1">Live Widget Placeholder</span>
             <span className="text-xs">Waiting for component integration...</span>
           </div>
        )}
      </section>

      {/* --- İÇ LİNKLER (INTERNAL LINKS) --- */}
      <section className="mt-12 border-t border-slate-200 pt-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Related Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
                href="/new-york/guide/call-times/" 
                className="p-4 block bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group"
            >
                <span className="font-semibold text-blue-600 group-hover:underline">Best Time to Call NYC</span>
                <p className="text-sm text-slate-600 mt-1">Planning a call from other cities to New York?</p>
            </Link>
            
            <Link 
                href="/time/new-york/london/" 
                className="p-4 block bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group"
            >
                <span className="font-semibold text-blue-600 group-hover:underline">NYC to London Converter</span>
                <p className="text-sm text-slate-600 mt-1">Check the live time difference instantly.</p>
            </Link>
        </div>
      </section>

      {/* --- SCHEMA INJECTION --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </article>
  );
}