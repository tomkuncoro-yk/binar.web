type Person = {
  id: string
  name: string
  role: string
  tags: string[]
  orcid?: string
  scholar?: string
}

const TEAM: Person[] = [
  { id: '1', name: 'Dr. A Researcher', role: 'Director', tags: ['Governance','Methods'], orcid: '0000-0001-2345-6789', scholar: '#' },
  { id: '2', name: 'B Fellow', role: 'Fellow', tags: ['Digital Democracy'] },
  { id: '3', name: 'C Affiliate', role: 'Affiliate', tags: ['Media & Disinformation'] },
]

export default function TeamPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Team</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {TEAM.map((p) => (
          <article key={p.id} className="rounded-lg border border-neutral-200 p-5">
            <div className="w-20 h-20 rounded-full bg-neutral-200" aria-label={`${p.name} headshot placeholder`} />
            <h2 className="mt-3 font-medium">{p.name}</h2>
            <div className="text-sm text-neutral-600">{p.role}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded bg-neutral-100 border border-neutral-200 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-sm">
              {p.orcid && <a href={`https://orcid.org/${p.orcid}`} className="text-neutral-700 hover:underline">ORCID</a>}
              {p.scholar && <a href={p.scholar} className="text-neutral-700 hover:underline">Google Scholar</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

