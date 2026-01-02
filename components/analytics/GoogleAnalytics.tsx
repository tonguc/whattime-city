/**
 * ⚠️ CRITICAL: GOOGLE ANALYTICS COMPONENT
 * ========================================
 * DO NOT DELETE OR MODIFY THIS FILE
 * 
 * This component handles all Google Analytics tracking.
 * It is intentionally separated from layout.tsx to prevent
 * accidental deletion during refactoring.
 * 
 * If you need to change GA ID, update the GA_MEASUREMENT_ID below.
 * 
 * Last verified working: 2025-01-02
 */

import Script from 'next/script'

// ⚠️ CRITICAL: Google Analytics Measurement ID
// Do not change unless you're migrating to a new GA property
export const GA_MEASUREMENT_ID = 'G-060GV967M0'

/**
 * Google Analytics Script Component
 * 
 * This component loads the gtag.js script and initializes GA.
 * It uses send_page_view: false because page views are tracked
 * manually by RouteTracker component for SPA navigation.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false
          });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
