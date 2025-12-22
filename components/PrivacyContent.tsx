'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'

export default function PrivacyContent() {
  const { theme, isLight } = useCityContext()
  
  const textMain = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-600' : 'text-slate-300'
  const textSubtle = isLight ? 'text-slate-500' : 'text-slate-400'
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold ${textMain} mb-4`}>Privacy Policy</h1>
        <p className={`${textSubtle} mb-8`}>Last updated: December 2024</p>
        
        <div className="space-y-8">
          <p className={textMuted}>
            At whattime.city, we take your privacy seriously. This policy describes how we collect, use, and protect your information when you use our website.
          </p>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Information We Collect</h2>
            
            <h3 className={`text-xl font-medium ${textMain} mt-6 mb-3`}>Automatically Collected Information</h3>
            <p className={`${textMuted} mb-4`}>
              When you visit our website, we automatically collect certain information:
            </p>
            <ul className={`${textMuted} space-y-2`}>
              <li>• IP address and approximate location (for displaying local time)</li>
              <li>• Browser type and version</li>
              <li>• Device type</li>
              <li>• Pages visited and time spent</li>
              <li>• Referring website</li>
            </ul>
            
            <h3 className={`text-xl font-medium ${textMain} mt-6 mb-3`}>Information You Provide</h3>
            <p className={textMuted}>
              We may collect information you voluntarily provide, such as when you contact us via email.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>How We Use Your Information</h2>
            <ul className={`${textMuted} space-y-2`}>
              <li>• To display accurate local time based on your location</li>
              <li>• To improve our website and services</li>
              <li>• To analyze website traffic and usage patterns</li>
              <li>• To respond to your inquiries</li>
            </ul>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Cookies and Tracking</h2>
            <p className={`${textMuted} mb-4`}>We use cookies and similar technologies to:</p>
            <ul className={`${textMuted} space-y-2`}>
              <li>• Remember your preferences (theme, favorite cities)</li>
              <li>• Analyze website traffic (Google Analytics)</li>
              <li>• Display relevant advertisements (Google AdSense)</li>
            </ul>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Third-Party Services</h2>
            <p className={`${textMuted} mb-4`}>We use the following third-party services:</p>
            <ul className={`${textMuted} space-y-2`}>
              <li>• <strong>Google Analytics</strong> - for website analytics</li>
              <li>• <strong>Google AdSense</strong> - for displaying advertisements</li>
              <li>• <strong>WeatherAPI</strong> - for weather data</li>
            </ul>
            <p className={`${textMuted} mt-4`}>
              These services may collect information according to their own privacy policies.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Data Security</h2>
            <p className={textMuted}>
              We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Your Rights</h2>
            <p className={textMuted}>
              You have the right to access, correct, or delete your personal information. You can also opt out of tracking by adjusting your browser settings or using browser extensions.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Children's Privacy</h2>
            <p className={textMuted}>
              Our website is not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Changes to This Policy</h2>
            <p className={textMuted}>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Contact Us</h2>
            <p className={textMuted}>
              If you have questions about this privacy policy, please <Link href="/contact" className="text-cyan-500 hover:underline">contact us</Link>.
            </p>
          </section>
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
