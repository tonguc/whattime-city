export const flightTimeSEO = {
  content: {
    h1: "Flight Time Calculator",
    intro: "Calculate your arrival time in local time when crossing time zones.",
    useCases: [
      { title: "Airport pickup coordination", description: "Let someone know exactly when you'll land in their time." },
      { title: "Hotel check-in planning", description: "Verify if you'll arrive in time for check-in." },
      { title: "Connecting flight timing", description: "Ensure you have enough layover time." },
      { title: "Meeting scheduling on arrival day", description: "Know if you can make that afternoon meeting." }
    ],
    whoIsItFor: "Frequent flyers, travel planners, and anyone booking international flights will find this tool useful. It eliminates confusion about what time you'll actually arrive at your destination in local time, especially when crossing multiple time zones.",
    sections: [
      { title: "How It Works", body: "Enter your departure city, arrival city, departure time, and flight duration. The calculator accounts for time zone differences and daylight saving time automatically." },
      { title: "Time Zone Accuracy", body: "All calculations use the IANA Time Zone Database to ensure accurate UTC offsets and DST rules for every city worldwide." }
    ],
    internalLinks: [
      { label: "Time Converter", href: "/time-converter", description: "Quick conversions" },
      { label: "Jet Lag Advisor", href: "/jet-lag-advisor", description: "Recovery tips" },
      { label: "Meeting Planner", href: "/meeting", description: "Schedule across zones" }
    ],
    faq: [
      { question: "Does this calculate actual flight distance?", answer: "No, you need to input the flight duration. Check your airline for the estimated flight time." },
      { question: "What does +1 day mean?", answer: "You will arrive on the following calendar day due to time zone differences or a long flight duration." },
      { question: "Does it account for DST?", answer: "Yes, Daylight Saving Time is automatically applied for both departure and arrival cities." },
      { question: "Can I use 24-hour time?", answer: "The calculator displays results in 12-hour format but you can select any hour from 0 to 23 in the departure time selector." }
    ],
    eeatFooter: "Last updated: March 2026 | ✓ Verified by WhatTime.city Editorial Team | Timezone data sourced from IANA Time Zone Database."
  }
} as const;

export const flightTimeFAQSchema = {} as const;
export const flightTimeTimezoneFacts = {} as const;
