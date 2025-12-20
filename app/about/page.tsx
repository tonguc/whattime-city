import { Metadata } from 'next'
import Link from 'next/link'
import SimpleHeader from '@/components/SimpleHeader'

export const metadata: Metadata = {
  title: 'About Us - whattime.city',
  description: 'Learn about whattime.city - your free, instant world clock for checking local time in any city worldwide.',
  alternates: {
    canonical: 'https://whattime.city/about'
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <SimpleHeader isLight={false} />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        <h1 className="text-4xl font-bold text-white mb-8">About whattime.city</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-lg text-slate-300 mb-6">
            whattime.city is a free, instant world clock designed to help you check the current local time in any city around the globe.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Mission</h2>
          <p className="text-slate-300 mb-6">
            We believe checking world time should be fast, beautiful, and free. Whether you're scheduling international meetings, planning travels, or staying connected with loved ones abroad, whattime.city provides accurate, real-time information at your fingertips.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Features</h2>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li>• Real-time local time for 200+ cities worldwide</li>
            <li>• Sunrise and sunset times</li>
            <li>• Live weather information</li>
            <li>• Meeting planner for multiple time zones</li>
            <li>• Time converter between cities</li>
            <li>• Interactive world map</li>
            <li>• Free embeddable clock widget</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Accuracy</h2>
          <p className="text-slate-300 mb-6">
            Our time data is synchronized with reliable sources and accounts for daylight saving time changes automatically. Weather data is provided by WeatherAPI.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Free Forever</h2>
          <p className="text-slate-300 mb-6">
            whattime.city is completely free to use. We may display non-intrusive ads to support the service, but we'll never charge for access to our core features.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} whattime.city. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-3 text-xs text-slate-500">
            <Link href="/about" className="hover:text-slate-300">About</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
