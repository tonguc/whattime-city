'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BosniaAndHerzegovinaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Sarajevo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Bosnia and Herzegovina', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1', highlight: true },
          { label: 'EU-style DST' },
          { label: 'Sarajevo' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Bosnia &amp; Herzegovina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Sarajevo' },
              { label: 'Population', value: '~3.2 million' },
              { label: 'Structure', value: '2 entities — Federation BiH + Republika Srpska' },
              { label: 'Famous For', value: 'Sarajevo, Mostar Bridge, Ottoman heritage' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Sarajevo — Where East Meets West on One Street</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Sarajevo is one of the <strong className={heading}>only cities in Europe where a mosque, Catholic cathedral, Orthodox church, and synagogue</strong> coexist within <strong className={heading}>500 meters</strong>. The city hosted the <strong className={heading}>1984 Winter Olympics</strong> — one of the few times the Games came to a multi-ethnic, multi-faith city.
            </p>
            <p>
              The famous <strong className={heading}>Stari Most (Old Bridge)</strong> in Mostar, originally built by the Ottomans in 1566 and reconstructed in 2004, is a <strong className={heading}>UNESCO World Heritage symbol</strong> of reconciliation. Bosnia&apos;s <strong className={heading}>CET timezone</strong> keeps it synchronized with <strong className={heading}>Croatia, Serbia, and Central Europe</strong> — crucial for a country navigating between EU aspirations and Balkan realities.
            </p>
            <p>
              BiH has a unique <strong className={heading}>caf&eacute; culture</strong> centered on <strong className={heading}>Bosnian coffee (bosanska kafa)</strong> — slow-brewed in a d&zcaron;ezva pot and served with rahat lokum. The ritual can take <strong className={heading}>hours</strong>, reflecting a <strong className={heading}>Mediterranean-meets-Ottoman sense of time</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bosnia &amp; Herzegovina Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Sarajevo', pop: '420K', note: 'Capital, 1984 Olympics, Ba\u0161\u010dar\u0161ija' },
              { city: 'Banja Luka', pop: '185K', note: 'RS capital, Vrbas River, Kastel' },
              { city: 'Tuzla', pop: '110K', note: '3rd city, salt lakes, industrial' },
              { city: 'Mostar', pop: '60K', note: 'Stari Most UNESCO, Herzegovina' },
              { city: 'Zenica', pop: '100K', note: 'Steel city, central Bosnia' },
              { city: 'Bi\u0107a\u0107', pop: '55K', note: 'NW hub, Una River, rafting' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
