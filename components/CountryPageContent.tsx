'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { getFlagUrl } from '@/shared/utils'

interface City {
  slug: string
  city: string
  country: string
  timezone: string
}

interface Country {
  name: string
  code: string
  slug: string
  capital: string
  continent: string
  timezones: string[]
  population: string
  currency: string
  currencySymbol: string
  phoneCode: string
  languages: string[]
}

interface CountryPageContentProps {
  country: Country
  cities: City[]
  relatedCountries: Country[]
  seoContent: {
    businessHours: string
    bestTimeToCall: string
    dstInfo: string
    travelTips: string
    funFacts: string[]
  }
}

export default function CountryPageContent({ 
  country, 
  cities, 
  relatedCountries,
  seoContent 
}: CountryPageContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { getLocalTime } = useCityContext()
  const { text, textMuted, card, isLight } = useThemeClasses()
  
  const innerCard = isLight ? 'bg-slate-100' : 'bg-slate-800/50'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  
  // FAQ Data
  const faqData = [
    {
      question: `What time zone is ${country.name} in?`,
      answer: `${country.name} ${country.timezones.length > 1 
        ? `spans ${country.timezones.length} time zones: ${country.timezones.join(', ')}` 
        : `uses ${country.timezones[0]}`}. The capital ${country.capital} uses ${country.timezones[0]}.`
    },
    {
      question: `Does ${country.name} observe Daylight Saving Time?`,
      answer: seoContent.dstInfo
    },
    {
      question: `What is the best time to call ${country.name} from the US?`,
      answer: seoContent.bestTimeToCall
    },
    {
      question: `What are typical business hours in ${country.name}?`,
      answer: seoContent.businessHours
    },
    {
      question: `What currency is used in ${country.name}?`,
      answer: `${country.name} uses the ${country.currency} (${country.currencySymbol}) as its official currency. The international dialing code is ${country.phoneCode}. Official languages include ${country.languages.join(', ')}.`
    }
  ]
  
  // FAQ data for schema
  const faqData = [
    {
      question: `What time zone is ${country.name} in?`,
      answer: `${country.name} ${country.timezones.length > 1 
        ? `spans ${country.timezones.length} time zones: ${country.timezones.join(', ')}` 
        : `uses ${country.timezones[0]}`}. The capital ${country.capital} uses ${country.timezones[0]}.`
    },
    {
      question: `Does ${country.name} observe Daylight Saving Time?`,
      answer: seoContent.dstInfo
    },
    {
      question: `What is the best time to call ${country.name} from the US?`,
      answer: seoContent.bestTimeToCall
    },
    {
      question: `What are typical business hours in ${country.name}?`,
      answer: seoContent.businessHours
    }
  ]
  
  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  
  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Page Title */}
      <header className="mb-6">
        <h1 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-2 flex items-center gap-3`}>
          <img 
            src={getFlagUrl(country.code, 'lg')} 
            alt={`${country.name} flag`}
            className="w-10 h-7 object-cover rounded shadow-sm"
          />
          Current Time in {country.name}
        </h1>
        <p className={`text-lg ${textMuted}`}>
          Check local time in {country.capital} and all {country.name} cities. {country.timezones.length > 1 
            ? `${country.name} spans ${country.timezones.length} time zones.` 
            : `${country.name} uses ${country.timezones[0]}.`}
        </p>
      </header>
      
      {/* Quick Facts */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-4`}>{country.name} Quick Facts</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className={`p-4 rounded-xl ${innerCard}`}>
            <div className={`text-xs ${textMuted} mb-1`}>🏛️ Capital City</div>
            <div className={`text-lg font-semibold ${headingColor}`}>{country.capital}</div>
          </div>
          
          <div className={`p-4 rounded-xl ${innerCard}`}>
            <div className={`text-xs ${textMuted} mb-1`}>👥 Population</div>
            <div className={`text-lg font-semibold ${headingColor}`}>{country.population}</div>
          </div>
          
          <div className={`p-4 rounded-xl ${innerCard}`}>
            <div className={`text-xs ${textMuted} mb-1`}>💰 Currency</div>
            <div className={`text-lg font-semibold ${headingColor}`}>{country.currencySymbol} {country.currency}</div>
          </div>
          
          <div className={`p-4 rounded-xl ${innerCard}`}>
            <div className={`text-xs ${textMuted} mb-1`}>📞 Phone Code</div>
            <div className={`text-lg font-semibold ${headingColor}`}>{country.phoneCode}</div>
          </div>
        </div>
        
        <div className={`mt-3 p-4 rounded-xl ${innerCard}`}>
          <div className={`text-xs ${textMuted} mb-2`}>🗣️ Official Languages</div>
          <div className="flex flex-wrap gap-2">
            {country.languages.map((lang: string, index: number) => (
              <span key={index} className={`px-3 py-1 rounded-full text-sm ${isLight ? 'bg-slate-200 text-slate-700' : 'bg-slate-700 text-slate-200'}`}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Time Zones */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-4 flex items-center gap-2`}>
          <span>🕐</span>
          Time Zones in {country.name}
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {country.timezones.map((tz: string, index: number) => (
            <span key={index} className={`px-4 py-2 rounded-xl text-sm font-medium ${isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'}`}>
              {tz}
            </span>
          ))}
        </div>
        
        <div className={`space-y-3 text-sm ${textMuted}`}>
          <p>
            {country.name} uses {country.timezones[0]} year-round. {country.capital} is the capital and largest city.
          </p>
          <p>{seoContent.dstInfo}</p>
        </div>
      </section>
      
      {/* Major Cities */}
      {cities.length > 0 && (
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
          <h2 className={`text-lg font-semibold ${headingColor} mb-4 flex items-center gap-2`}>
            <img 
              src={getFlagUrl(country.code, 'sm')} 
              alt=""
              className="w-5 h-3.5 object-cover rounded-sm"
            />
            Major Cities in {country.name} ({cities.length} cities)
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-800/50 hover:bg-slate-700/50'}`}
              >
                <div>
                  <div className={`font-medium ${headingColor}`}>{city.city}</div>
                  <div className={`text-xs ${textMuted}`}>{city.timezone.split('/').pop()?.replace('_', ' ')}</div>
                </div>
                <div className={`text-lg font-bold tabular-nums ${headingColor}`}>
                  {getLocalTime({ timezone: city.timezone } as any)}
                </div>
              </Link>
            ))}
          </div>
          
          <p className={`text-xs ${textMuted} mt-4`}>
            Click on any city to see detailed local time, sunrise/sunset times, and weather information.
          </p>
        </section>
      )}
      
      {/* Best Time to Call */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3 flex items-center gap-2`}>
          <span>📞</span>
          Best Time to Call {country.name}
        </h2>
        <p className={`text-sm ${textMuted}`}>{seoContent.bestTimeToCall}</p>
        <p className={`text-sm ${textMuted} mt-3`}>
          Standard business hours in {country.name} are typically 9:00 AM to 5:00 PM or 6:00 PM local time, Monday through Friday. {seoContent.businessHours}
        </p>
      </section>
      
      {/* Travel Tips */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3 flex items-center gap-2`}>
          <span>✈️</span>
          Time-Related Travel Tips for {country.name}
        </h2>
        <p className={`text-sm ${textMuted}`}>{seoContent.travelTips}</p>
      </section>
      
      {/* Fun Facts */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3 flex items-center gap-2`}>
          <span>💡</span>
          Interesting Facts About Time in {country.name}
        </h2>
        <ul className={`space-y-2 text-sm ${textMuted}`}>
          {seoContent.funFacts.map((fact: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isLight ? 'bg-slate-400' : 'bg-slate-500'}`}></span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>
      
      {/* About */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-3`}>
          About Time in {country.name}
        </h2>
        <div className={`space-y-3 text-sm ${textMuted}`}>
          <p>
            {country.name} uses a single time zone ({country.timezones[0]}). This makes it relatively straightforward to coordinate times across the country.
          </p>
          <p>
            The capital city {country.capital} serves as the political and often economic center of {country.name}. Major business activities are spread across cities including {cities.slice(0, 3).map(c => c.city).join(', ') || country.capital}.
          </p>
          <p>
            When planning international calls, video conferences, or business meetings with contacts in {country.name}, it's important to consider the time difference. {country.timezones[0]} is the most commonly referenced time zone for {country.name}.
          </p>
          <p>
            {country.name} uses the {country.currency} ({country.currencySymbol}) as its official currency. The international dialing code is {country.phoneCode}. Multiple languages are spoken, including {country.languages.join(', ')}.
          </p>
        </div>
      </section>
      
      {/* Cities in Country (if more than displayed) */}
      {cities.length > 0 && (
        <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
          <h2 className={`text-lg font-semibold ${headingColor} mb-4 flex items-center gap-2`}>
            <img 
              src={getFlagUrl(country.code, 'sm')} 
              alt=""
              className="w-5 h-3.5 object-cover rounded-sm"
            />
            Cities in {country.name}
          </h2>
          <p className={`text-sm ${textMuted} mb-3`}>
            Explore local time in {cities.length} {cities.length === 1 ? 'city' : 'cities'} across {country.name}:
          </p>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className={`px-4 py-2 rounded-xl text-sm transition-all ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'}`}
              >
                {city.city}
              </Link>
            ))}
          </div>
        </section>
      )}
      
      {/* Other Countries in Continent */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-4`}>
          🌍 Other Countries in {country.continent.charAt(0).toUpperCase() + country.continent.slice(1)}
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {relatedCountries.map((c) => (
            <Link
              key={c.slug}
              href={`/country/${c.slug}`}
              className={`px-3 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'}`}
            >
              <img 
                src={getFlagUrl(c.code, 'sm')} 
                alt={`${c.name} flag`}
                className="w-5 h-3.5 object-cover rounded-sm"
              />
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>
      
      {/* FAQ Section - Accordion */}
      <section className={`rounded-2xl p-5 mb-4 backdrop-blur-xl border ${card}`}>
        <h2 className={`text-lg font-semibold ${headingColor} mb-4`}>
          Frequently Asked Questions About Time in {country.name}
        </h2>
        
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden ${innerCard}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full p-4 text-left flex items-center justify-between gap-3 ${headingColor} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
              >
                <h3 className="font-medium pr-2">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className={`px-4 pb-4 text-sm ${textMuted}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
