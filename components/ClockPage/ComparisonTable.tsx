'use client'

interface ComparisonRow {
  location: string
  winter: string
  summer: string
}

interface ComparisonTableProps {
  title: string
  rows: ComparisonRow[]
  card: string
  innerCard: string
  heading: string
  subText: string
  mutedText: string
  isLight: boolean
}

export default function ComparisonTable({
  title, rows, card, innerCard, heading, subText, mutedText, isLight,
}: ComparisonTableProps) {
  return (
    <div className={`${card} mt-6`}>
      <h2 className={`text-lg font-semibold mb-4 ${heading}`}>{title}</h2>
      <div className={innerCard}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={mutedText}>
                <th className="text-left py-2 font-medium">Location</th>
                <th className="text-left py-2 font-medium">Winter</th>
                <th className="text-left py-2 font-medium">Summer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-t ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
                  <td className={`py-2 font-medium ${subText}`}>{r.location}</td>
                  <td className={`py-2 ${subText}`}>{r.winter}</td>
                  <td className={`py-2 ${subText}`}>{r.summer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
