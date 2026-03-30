export const flightTimeSEO = {
  metadata: {
    title: "Flight Time Calculator — Arrival Time",
    description: "What time will you land? Enter departure city, arrival city, and flight duration to instantly calculate your local arrival time — automatically adjusts for time zones and Daylight Saving Time.",
    canonical: "https://whattime.city/flight-time/",
    openGraph: {
      title: "Flight Time Calculator — What Time Do I Land?",
      description: "Calculate your local arrival time when crossing time zones. Automatically handles DST for 1,700+ cities worldwide.",
      url: "https://whattime.city/flight-time/"
    }
  },
  content: {
    h1: "Flight Arrival Time Calculator",
    intro: "What time will you land? Enter your departure city, arrival city, and flight duration — get your exact local arrival time with automatic time zone adjustment.",
    useCases: [
      { title: "Airport pickup coordination", description: "Tell someone exactly when you'll land in their local time, not the airline's home-base time." },
      { title: "Hotel check-in planning", description: "Verify whether you'll arrive early enough for check-in — before booking a day-use rate." },
      { title: "Connecting flight timing", description: "Ensure you have enough layover time when connections cross into a new time zone." },
      { title: "Meeting scheduling on arrival day", description: "Know if you can realistically make a business meeting the same day you land." },
      { title: "Family calling from home", description: "Let family know when to expect your 'landed safely' call in their time zone." }
    ],
    whoIsItFor: "Frequent flyers, travel planners, and anyone booking international flights will find this tool essential. It eliminates the confusion of '7-hour flight from New York at 8 PM — what time is that in London?' by computing the exact local arrival time, accounting for time zone crossings and Daylight Saving Time transitions automatically.",
    sections: [
      {
        title: "How It Works",
        content: "Enter your departure city, arrival city, departure time (local), and flight duration in hours and minutes. The calculator adds the flight duration to your departure time, then converts the result from UTC into the destination's local time — applying the correct DST offset for the date. The result is the exact local time you will land."
      },
      {
        title: "Time Zone Accuracy",
        content: "All calculations use the IANA Time Zone Database, which contains verified UTC offsets and historical DST rules for every time zone worldwide. This means the calculator is accurate even for unusual cases like India's UTC+5:30 offset, Nepal's UTC+5:45, or Australia's state-by-state DST boundaries."
      },
      {
        title: "Why Local Arrival Time Matters",
        content: "Airlines display flight schedules in the departure airport's local time. A flight departing New York at 10:00 PM and arriving 7 hours later is 5:00 AM — but in London, that's 10:00 AM GMT. The 5-hour difference (EST vs GMT) is what this calculator resolves instantly. During summer, when New York observes EDT (UTC-4) and London observes BST (UTC+1), the gap becomes 5 hours — but the calculator handles that automatically."
      }
    ],
    internalLinks: [
      { text: "Time Converter", href: "/time-converter", description: "Convert any time between two cities" },
      { text: "Jet Lag Advisor", href: "/jet-lag-advisor", description: "Recovery tips for long-haul travel" },
      { text: "Meeting Planner", href: "/meeting", description: "Schedule across multiple time zones" }
    ],
    faq: [
      {
        question: "What time do I land if I depart New York at 8 PM for London?",
        answer: "A typical JFK–LHR flight takes about 7 hours. Departing at 8:00 PM EST (UTC-5), you add 7 hours to get 3:00 AM UTC. London is UTC+0 in winter, so you land at 3:00 AM local time (+1 day). In summer, London is BST (UTC+1), making it 4:00 AM. Always check: your departure time + flight duration + destination UTC offset = local arrival time."
      },
      {
        question: "Does this calculate actual flight distance?",
        answer: "No — you need to input the flight duration yourself. Check your airline's website, booking confirmation, or a flight search engine for the scheduled flight duration. The calculator then converts that duration into a local arrival time at your destination."
      },
      {
        question: "What does '+1 day' mean in the arrival result?",
        answer: "It means you will arrive on the following calendar day. This happens when crossing midnight (local destination time) during the flight. For example, departing Los Angeles at 11:00 PM on a 10-hour flight to London means landing at 7:00 PM London time — but on the next calendar day due to the time zone shift."
      },
      {
        question: "Does the calculator account for Daylight Saving Time?",
        answer: "Yes. Daylight Saving Time is automatically applied for both departure and arrival cities based on the IANA Time Zone Database. If your departure or arrival city observes DST, the calculator uses the correct UTC offset for today's date. You do not need to manually adjust for summer or winter time."
      },
      {
        question: "What happens when a flight crosses the International Date Line?",
        answer: "Flying westbound across the International Date Line (roughly 180° longitude, in the Pacific Ocean) typically adds a full calendar day. Flying eastbound removes one. For example, flying from Los Angeles to Tokyo you may land two calendar days after departure even on a 10-hour flight. The calculator handles date-line crossings automatically."
      },
      {
        question: "How do I find my flight duration?",
        answer: "Check your airline booking confirmation, the airline's website, or a flight search engine like Google Flights. The scheduled flight duration is shown as the 'flight time' or 'journey time' in hours and minutes. Note: this is wheels-up to wheels-down time, excluding boarding and taxiing."
      },
      {
        question: "How does crossing time zones affect my arrival time?",
        answer: "Each time zone is roughly 15 degrees of longitude wide and represents 1 hour of offset from UTC. Flying eastbound moves your clock forward; flying westbound moves it back. A New York–London flight crosses approximately 5 time zones, which is why an 8-hour flight departing at 8 PM still lands in London at around 8 AM the next morning — the clock jumped 5 hours forward."
      },
      {
        question: "Does this work for connecting flights?",
        answer: "Not directly — it calculates one leg at a time. For a connecting flight, calculate the first leg to get your layover arrival time, then calculate the second leg starting from that arrival time. Make sure to use the layover airport's city for the second calculation."
      },
      {
        question: "What should I enter as my departure time?",
        answer: "Enter the scheduled departure time in the departure city's local time — this is the time shown on your boarding pass or booking. Do not adjust for time zones; the calculator handles the conversion automatically."
      },
      {
        question: "Why might my arrival time look incorrect?",
        answer: "The most common reasons are: (1) an incorrect flight duration — double-check against your booking; (2) a city being assigned to the wrong time zone — try using the nearest major city in the same zone; (3) DST ambiguity around clock-change dates, where an hour can appear or disappear."
      },
      {
        question: "How many time zones does a New York to London flight cross?",
        answer: "A JFK–LHR flight crosses roughly 5 standard time zones (UTC-5 EST to UTC+0 GMT). During summer, New York uses EDT (UTC-4) and London uses BST (UTC+1), still a 5-hour difference. This is why a ~7-hour overnight flight from New York lands in London in the morning — you gain 5 hours on the clock even though only 7 have passed."
      },
      {
        question: "Can I use 24-hour (military) time?",
        answer: "You can enter any hour from 0 to 23 in the departure time selector, which covers the full 24-hour day. Results are displayed in 12-hour AM/PM format. If you need a 24-hour result, simply convert: any time showing PM just add 12 hours (e.g., 3:00 PM = 15:00)."
      }
    ],
    eeatFooter: "Last updated: March 2026 | Verified by WhatTime.city Editorial Team | Timezone data sourced from IANA Time Zone Database (tzdata)."
  }
} as const;
