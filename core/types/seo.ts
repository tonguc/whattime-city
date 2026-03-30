/**
 * SEO Data Types
 * data/seo/{city}-seo.json dosyalarının tip tanımları
 */

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSchema {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export interface TimezoneFacts {
  full_name?: string
  utc_offset?: string
  dst_observed?: boolean
}

export interface ContentBlock {
  title: string
  content: string
}

export interface CitySEOData {
  seo_title: string
  seo_description: string
  ai_seo_first_sentence?: string
  faq?: FAQItem[]
  faq_schema?: FAQSchema
  content_blocks?: ContentBlock[]
  eeat_footer?: string
  timezone_facts?: TimezoneFacts
}
