import { Metadata } from 'next'
import WidgetGenerator from '@/components/WidgetGenerator'

export const metadata: Metadata = {
  title: 'Free Clock Widget for Your Website',
  description: 'Free embeddable clock widget for any city. Auto day/night theme, 3 sizes, transparent option. Copy the iframe code — works on WordPress, Wix, Squarespace, Notion, Ghost, plain HTML.',
  keywords: [
    'clock widget',
    'world clock widget',
    'free clock widget',
    'embeddable clock',
    'website clock',
    'blog clock widget',
    'time zone widget',
    'city clock embed'
  ],
  openGraph: {
    title: 'Free Clock Widget for Your Website',
    description: 'Beautiful, customizable clock widget. Copy the code and embed it on your site.',
    type: 'website',
    siteName: 'whattime.city',
  }
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Embed a Free Clock Widget on Your Website',
  description: 'Add a live, time-zone-aware clock widget to any website using a simple iframe embed. Works on WordPress, Wix, Squarespace, Notion, Ghost, and plain HTML.',
  totalTime: 'PT1M',
  supply: [{ '@type': 'HowToSupply', name: 'A website or blog where you can paste HTML' }],
  tool: [{ '@type': 'HowToTool', name: 'whattime.city Widget Generator (free, no signup)' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Pick a city', text: 'Search and select the city you want to display in the widget (any of 1,700+ supported cities).' },
    { '@type': 'HowToStep', position: 2, name: 'Customize appearance', text: 'Choose theme (auto, light, or dark), size (small/medium/large), and toggle date, timezone label, or transparent background.' },
    { '@type': 'HowToStep', position: 3, name: 'Copy the iframe code', text: 'Click the Copy Code button — the generator produces a single iframe snippet with the iframe pointing to whattime.city/embed/{city}.' },
    { '@type': 'HowToStep', position: 4, name: 'Paste into your site', text: 'Paste the snippet into any HTML block in your site. WordPress: use a Custom HTML block. Notion: /embed and paste the iframe URL. Squarespace/Wix: use an Embed Block.' },
    { '@type': 'HowToStep', position: 5, name: 'Verify it loads', text: 'Save and view your page. The widget loads with the live local time. It auto-updates every second; theme follows the visitor’s local day/night unless you set a fixed theme.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the whattime.city clock widget free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — the widget is completely free with no signup required. There are no ads inside the widget and no tracking beyond standard server logs.' },
    },
    {
      '@type': 'Question',
      name: 'Does it work on WordPress, Wix, Squarespace, Notion?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The widget is a standard iframe embed and works on any platform that allows custom HTML or iframe blocks: WordPress (Custom HTML block), Wix and Squarespace (Embed Block), Notion (/embed slash command), Ghost, Webflow, Framer, plain HTML, and most CMS platforms.' },
    },
    {
      '@type': 'Question',
      name: 'Does the widget handle Daylight Saving Time automatically?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The widget uses the IANA Time Zone Database, so DST transitions, half-hour offsets (India UTC+5:30), and quarter-hour offsets (Nepal UTC+5:45) are all handled automatically. No manual updates needed at clock-change dates.' },
    },
    {
      '@type': 'Question',
      name: 'How many cities can I embed?',
      acceptedAnswer: { '@type': 'Answer', text: 'You can embed any of 1,700+ cities. There is no limit on how many widgets you place on a single page — each iframe runs independently.' },
    },
    {
      '@type': 'Question',
      name: 'Can I customize colors or remove the attribution link?',
      acceptedAnswer: { '@type': 'Answer', text: 'You can choose between auto (follows visitor day/night), light, and dark themes; pick small, medium, or large sizes; and toggle the date and timezone label. A small "whattime.city" attribution link is part of the free widget — for white-label embedding, contact us.' },
    },
    {
      '@type': 'Question',
      name: 'Does the widget slow down my page?',
      acceptedAnswer: { '@type': 'Answer', text: 'The widget is around 25 KB total (HTML + CSS + minimal JS). It loads lazily inside an iframe, so it does not block your page render. There are no external script dependencies.' },
    },
  ],
}

export default function WidgetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WidgetGenerator />
    </>
  )
}
