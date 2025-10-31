import { useState } from 'react'

type Pub = {
  id: string
  title: string
  type: 'Article' | 'Working Paper' | 'Policy Brief'
  year: number
  theme: string
  doi?: string
  url?: string
}

const SAMPLE: Pub[] = [
  { id: 'p1', title: 'Civic tech and participation', type: 'Article', year: 2025, theme: 'Civic Engagement', doi: '10.1234/example.doi' },
  { id: 'p2', title: 'Disinformation networks', type: 'Working Paper', year: 2024, theme: 'Media & Disinformation', url: 'https://example.org/p2' },
  { id: 'p3', title: 'Policy brief on local governance', type: 'Policy Brief', year: 2025, theme: 'Governance & Policy', url: 'https://example.org/p3' },
]

export default function PublicationsPage() {
  const [year, setYear] = useState<string>('all')
  const [type, setType] = useState<string>('all')
  const [theme, setTheme] = useState<string>('all')

  const filtered = SAMPLE.filter(p =>
    (year === 'all' || p.year.toString() === year) &&
    (type === 'all' || p.type === type) &&
    (theme === 'all' || p.theme === theme)
  )

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Publications</h1>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3" aria-label="Filter publications">
        <select value={year} onChange={(e)=>setYear(e.target.value)} className="rounded-md border border-neutral-300 px-3 py-2">
          <option value="all">All years</option>
          {[2025,2024,2023].map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select value={type} onChange={(e)=>setType(e.target.value)} className="rounded-md border border-neutral-300 px-3 py-2">
          <option value="all">All types</option>
          {['Article','Working Paper','Policy Brief'].map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={theme} onChange={(e)=>setTheme(e.target.value)} className="rounded-md border border-neutral-300 px-3 py-2 md:col-span-2">
          <option value="all">All themes</option>
          {['Digital Democracy','Civic Engagement','Governance & Policy','Media & Disinformation'].map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </form>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <li key={p.id} className="card p-5">
            <div className="text-xs text-neutral-500">{p.type} · {p.year} · {p.theme}</div>
            <h2 className="mt-1 text-lg font-medium">{p.title}</h2>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              {p.url && <a href={p.url} className="text-navy-700 hover:underline">Read</a>}
              {p.doi && <a href={`https://doi.org/${p.doi}`} className="text-navy-700 hover:underline">DOI</a>}
              <a href="#" className="text-neutral-700 hover:underline">BibTeX</a>
              <a href="#" className="text-neutral-700 hover:underline">EndNote</a>
              <a href="#" className="text-neutral-700 hover:underline">Cite</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
