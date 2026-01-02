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
 * Fixed: Using native script tags instead of Next.js Script component
 */

// ⚠️ CRITICAL: Google Analytics Measurement ID
// Do not change unless you're migrating to a new GA property
export const GA_MEASUREMENT_ID = 'G-060GV967M0'

/**
 * Google Analytics Script Component
 * 
 * Uses native script tags for reliable loading.
 * Next.js Script component in <head> causes preload issues.
 */
export function GoogleAnalytics() {
  return (
    <>
      {/* Load gtag.js */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      {/* Initialize GA */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false
            });
          `
        }}
      />
    </>
  )
}

export default GoogleAnalytics
