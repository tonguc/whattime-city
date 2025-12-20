import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - whattime.city',
  description: 'Privacy policy for whattime.city - how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://whattime.city/privacy'
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to World Clock
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">Last updated: December 2024</p>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 mb-6">
            At whattime.city, we take your privacy seriously. This policy describes how we collect, use, and protect your information when you use our website.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">Automatically Collected Information</h3>
          <p className="text-slate-300 mb-4">
            When you visit our website, we automatically collect certain information:
          </p>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li>• IP address and approximate location (for displaying local time)</li>
            <li>• Browser type and version</li>
            <li>• Device type</li>
            <li>• Pages visited and time spent</li>
            <li>• Referring website</li>
          </ul>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">Information You Provide</h3>
          <p className="text-slate-300 mb-6">
            We may collect information you voluntarily provide, such as when you contact us via email.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li>• To display accurate local time based on your location</li>
            <li>• To improve our website and services</li>
            <li>• To analyze website traffic and usage patterns</li>
            <li>• To respond to your inquiries</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies and Tracking</h2>
          <p className="text-slate-300 mb-4">
            We use cookies and similar technologies to:
          </p>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li>• Remember your preferences (theme, favorite cities)</li>
            <li>• Analyze website traffic (Google Analytics)</li>
            <li>• Display relevant advertisements (Google AdSense)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
          <p className="text-slate-300 mb-4">
            We use the following third-party services:
          </p>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li>• <strong>Google Analytics</strong> - for website analytics</li>
            <li>• <strong>Google AdSense</strong> - for displaying advertisements</li>
            <li>• <strong>WeatherAPI</strong> - for weather data</li>
          </ul>
          <p className="text-slate-300 mb-6">
            These services may collect information according to their own privacy policies.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
          <p className="text-slate-300 mb-6">
            We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
          <p className="text-slate-300 mb-6">
            You have the right to access, correct, or delete your personal information. You can also opt out of tracking by adjusting your browser settings or using browser extensions.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Children's Privacy</h2>
          <p className="text-slate-300 mb-6">
            Our website is not directed to children under 13. We do not knowingly collect personal information from children.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-slate-300 mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-300 mb-6">
            If you have questions about this privacy policy, please <Link href="/contact" className="text-cyan-400 hover:underline">contact us</Link>.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} whattime.city. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
