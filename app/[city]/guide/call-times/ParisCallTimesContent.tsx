'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisCallTimesContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Best Time to Call Paris: Optimal Windows from Any Country</h1>
      
      <p className="lead">
        Planning a call to Paris? Whether for business or personal reasons, finding the right 
        time window is crucial. Paris is on Central European Time (CET/CEST).
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">📞 Quick Reference: Paris Business Hours</h2>
        <div className="text-sm">
          <p><strong>Best calling window:</strong> 10:00 AM - 12:00 PM and 2:00 PM - 5:00 PM CET</p>
          <p><strong>Avoid:</strong> 12:00 PM - 2:00 PM (lunch) and after 6:00 PM</p>
          <p><strong>Country code:</strong> +33</p>
        </div>
      </div>

      <h2>Best Time to Call Paris from Major Cities</h2>

      <h3>🇺🇸 From New York (EST/EDT)</h3>
      <ul>
        <li><strong>Paris is:</strong> 6 hours ahead</li>
        <li><strong>Best time to call:</strong> 4:00 AM - 6:00 AM (10 AM - 12 PM Paris)</li>
        <li><strong>Or:</strong> 8:00 AM - 11:00 AM (2 PM - 5 PM Paris)</li>
        <li><strong>Avoid:</strong> 6:00 AM - 8:00 AM NY (Paris lunch)</li>
      </ul>

      <div className="not-prose my-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm">
        <strong>When Paris is 9:00 AM →</strong> New York is 3:00 AM<br/>
        <strong>When Paris is 6:00 PM →</strong> New York is 12:00 PM noon
      </div>

      <h3>🇺🇸 From Los Angeles (PST/PDT)</h3>
      <ul>
        <li><strong>Paris is:</strong> 9 hours ahead</li>
        <li><strong>Best time to call:</strong> 1:00 AM - 3:00 AM (10 AM - 12 PM Paris)</li>
        <li><strong>Or:</strong> 5:00 AM - 8:00 AM (2 PM - 5 PM Paris)</li>
        <li><strong>Challenge:</strong> Very early mornings or evening calls for Paris</li>
      </ul>

      <h3>🇬🇧 From London (GMT/BST)</h3>
      <ul>
        <li><strong>Paris is:</strong> 1 hour ahead</li>
        <li><strong>Best time to call:</strong> 9:00 AM - 5:00 PM London time</li>
        <li><strong>Easy:</strong> Nearly full overlap during business hours</li>
        <li><strong>Remember:</strong> 12:00 PM London = 1:00 PM Paris (lunch!)</li>
      </ul>

      <h3>🇦🇪 From Dubai (GST)</h3>
      <ul>
        <li><strong>Paris is:</strong> 3 hours behind</li>
        <li><strong>Best time to call:</strong> 1:00 PM - 5:00 PM Dubai (10 AM - 2 PM Paris)</li>
        <li><strong>Or:</strong> 5:00 PM - 8:00 PM Dubai (2 PM - 5 PM Paris)</li>
        <li><strong>Good overlap:</strong> Afternoon Dubai = workday Paris</li>
      </ul>

      <h3>🇮🇳 From Mumbai (IST)</h3>
      <ul>
        <li><strong>Paris is:</strong> 4.5 hours behind</li>
        <li><strong>Best time to call:</strong> 2:30 PM - 6:30 PM Mumbai (10 AM - 2 PM Paris)</li>
        <li><strong>Or:</strong> 6:30 PM - 9:30 PM Mumbai (2 PM - 5 PM Paris)</li>
        <li><strong>Reasonable:</strong> Afternoon/evening Mumbai works well</li>
      </ul>

      <h3>🇸🇬 From Singapore (SGT)</h3>
      <ul>
        <li><strong>Paris is:</strong> 7 hours behind</li>
        <li><strong>Best time to call:</strong> 5:00 PM - 7:00 PM Singapore (10 AM - 12 PM Paris)</li>
        <li><strong>Or:</strong> 9:00 PM - 12:00 AM Singapore (2 PM - 5 PM Paris)</li>
        <li><strong>Challenge:</strong> Evening calls for Singapore</li>
      </ul>

      <h3>🇯🇵 From Tokyo (JST)</h3>
      <ul>
        <li><strong>Paris is:</strong> 8 hours behind</li>
        <li><strong>Best time to call:</strong> 6:00 PM - 8:00 PM Tokyo (10 AM - 12 PM Paris)</li>
        <li><strong>Or:</strong> 10:00 PM Tokyo (2 PM Paris)</li>
        <li><strong>Challenge:</strong> Limited overlap, evening Tokyo best</li>
      </ul>

      <h3>🇦🇺 From Sydney (AEST/AEDT)</h3>
      <ul>
        <li><strong>Paris is:</strong> 9-10 hours behind</li>
        <li><strong>Best time to call:</strong> 7:00 PM - 9:00 PM Sydney (10 AM - 12 PM Paris)</li>
        <li><strong>Challenge:</strong> Minimal overlap, evening Sydney = morning Paris</li>
      </ul>

      <h2>Times to Avoid</h2>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
        <h3 className="font-bold mb-2">⚠️ Don't Call During:</h3>
        <ul className="text-sm space-y-1">
          <li>• <strong>12:00 PM - 2:00 PM Paris:</strong> Sacred lunch hour</li>
          <li>• <strong>Before 9:00 AM Paris:</strong> Too early for business</li>
          <li>• <strong>After 6:00 PM Paris:</strong> "Right to disconnect" culture</li>
          <li>• <strong>Weekends:</strong> Unless personal/urgent</li>
          <li>• <strong>August:</strong> Many people on vacation</li>
        </ul>
      </div>

      <h2>French Phone Etiquette</h2>

      <ul>
        <li><strong>Always start with "Bonjour"</strong> — Never jump straight to business</li>
        <li><strong>Use formal language</strong> — "Vous" not "tu" with business contacts</li>
        <li><strong>Keep it structured</strong> — French business culture appreciates clarity</li>
        <li><strong>Schedule in advance</strong> — Cold calls less effective than scheduled calls</li>
        <li><strong>Follow up in writing</strong> — Send email summary after important calls</li>
      </ul>

      <h2>Calling France: Technical Details</h2>

      <div className="not-prose my-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <ul className="text-sm space-y-2">
          <li><strong>Country code:</strong> +33</li>
          <li><strong>Paris area:</strong> +33 1 (drop the 0 from 01)</li>
          <li><strong>Mobile numbers:</strong> +33 6 or +33 7</li>
          <li><strong>Example:</strong> 01 23 45 67 89 → +33 1 23 45 67 89</li>
          <li><strong>Popular apps:</strong> WhatsApp, FaceTime, Zoom widely used</li>
        </ul>
      </div>

      <h2>Video Call Considerations</h2>

      <ul>
        <li><strong>Background matters:</strong> French professionals appreciate neat settings</li>
        <li><strong>Dress code:</strong> Smart casual minimum, formal for first meetings</li>
        <li><strong>Punctuality:</strong> Be on time for scheduled calls</li>
        <li><strong>Small talk:</strong> Brief pleasantries before diving into business</li>
      </ul>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h3 className="font-bold mb-3">⏰ Quick Conversion Table</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Paris Time</th>
              <th className="text-left py-2">NYC</th>
              <th className="text-left py-2">London</th>
              <th className="text-left py-2">Dubai</th>
              <th className="text-left py-2">Singapore</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">9:00 AM</td><td>3:00 AM</td><td>8:00 AM</td><td>12:00 PM</td><td>4:00 PM</td></tr>
            <tr><td className="py-1">12:00 PM</td><td>6:00 AM</td><td>11:00 AM</td><td>3:00 PM</td><td>7:00 PM</td></tr>
            <tr><td className="py-1">3:00 PM</td><td>9:00 AM</td><td>2:00 PM</td><td>6:00 PM</td><td>10:00 PM</td></tr>
            <tr><td className="py-1">6:00 PM</td><td>12:00 PM</td><td>5:00 PM</td><td>9:00 PM</td><td>1:00 AM*</td></tr>
          </tbody>
        </table>
        <p className="text-xs mt-2 text-slate-500">*Next day. Times shown for winter (CET). Summer adds 1 hour to Paris.</p>
      </div>
    </article>
  )
}
