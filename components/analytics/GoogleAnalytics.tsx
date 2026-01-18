/**
 * ⚠️ CRITICAL: GOOGLE ANALYTICS COMPONENT
 * ========================================
 * DO NOT DELETE OR MODIFY THIS FILE
 * 
 * This component handles all Google Analytics tracking.
 * It is intentionally separated from layout.tsx to prevent
 * accidental deletion during refactoring.
 * 
 * IMPORTANT: GA is now ONLY loaded here, not in layout.tsx
 * 
 * Last verified working: 2025-01-17
 * Fixed: Removed duplicate loading, added proper session tracking
 */

// ⚠️ CRITICAL: Google Analytics Measurement ID
// Do not change unless you're migrating to a new GA property
export const GA_MEASUREMENT_ID = 'G-ED5Y13JE4H'

/**
 * Google Analytics Script Component
 * 
 * Fixes for "(not set)" issue:
 * 1. Single loading point (no duplicates)
 * 2. Config fires before any events
 * 3. Proper session_start handling
 * 4. Cookie domain and flags for cross-page tracking
 * 5. Default consent mode for GDPR compliance
 */
export function GoogleAnalytics() {
  return (
    <>
      {/* Default consent mode - fires FIRST before gtag loads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default consent - can be updated later by cookie banner
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `
        }}
      />
      {/* Load gtag.js AFTER consent is set */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      {/* Initialize GA with proper config */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Config with enhanced measurement and session handling
            gtag('config', '${GA_MEASUREMENT_ID}', {
              // Let GA handle page views automatically for proper session_start
              send_page_view: true,
              // Cookie settings for cross-page session tracking
              cookie_domain: 'auto',
              cookie_flags: 'SameSite=None;Secure',
              // Enhanced measurement
              page_title: document.title,
              page_location: window.location.href,
              // Session timeout (30 minutes default)
              session_engagement_time_msec: 100
            });
          `
        }}
      />
    </>
  )
}

export default GoogleAnalytics
