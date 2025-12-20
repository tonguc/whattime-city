import { Metadata } from 'next'
import Link from 'next/link'
import SimpleHeader from '@/components/SimpleHeader'

export const metadata: Metadata = {
  title: 'Contact Us - whattime.city',
  description: 'Get in touch with the whattime.city team. We\'d love to hear from you!',
  alternates: {
    canonical: 'https://whattime.city/contact'
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <SimpleHeader isLight={false} />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-lg text-slate-300 mb-8">
            Have a question, suggestion, or feedback? We'd love to hear from you!
          </p>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </h2>
            <p className="text-slate-300 mb-4">
              For general inquiries, suggestions, or support:
            </p>
            <a 
              href="mailto:hello@whattime.city" 
              className="text-xl text-cyan-400 hover:text-cyan-300 font-medium"
            >
              hello@whattime.city
            </a>
          </div>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-medium text-white mb-2">🐛 Bug Reports</h3>
              <p className="text-slate-400 text-sm">
                Found something that's not working? Let us know and we'll fix it as soon as possible.
              </p>
            </div>
            
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-medium text-white mb-2">💡 Feature Requests</h3>
              <p className="text-slate-400 text-sm">
                Have an idea to make whattime.city better? We're always looking to improve.
              </p>
            </div>
            
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-medium text-white mb-2">🤝 Partnerships</h3>
              <p className="text-slate-400 text-sm">
                Interested in working together? Reach out to discuss opportunities.
              </p>
            </div>
            
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-medium text-white mb-2">📰 Press</h3>
              <p className="text-slate-400 text-sm">
                Media inquiries and press-related questions are welcome.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-indigo-900/30 rounded-xl border border-indigo-700/50">
            <h3 className="text-lg font-medium text-white mb-2">Response Time</h3>
            <p className="text-slate-300">
              We typically respond within 24-48 hours. For urgent matters, please indicate so in your email subject line.
            </p>
          </div>
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
