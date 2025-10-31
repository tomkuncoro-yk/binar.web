import { Link } from 'react-router-dom'

export default function JournalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold">BINAR Journal</h1>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          A peer-reviewed, open-access journal advancing rigorous, nonpartisan research on
          governance, civic engagement, political communication, and social change in Indonesia
          and Southeast Asia.
        </p>
      </section>

      {/* Current Publication */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">Current Publication</h2>
          <Link to="/publications" className="text-sm text-navy-700 hover:underline">Browse all</Link>
        </div>
        <article className="card p-6">
          <div className="text-sm text-neutral-500">Vol. 3, No. 1 — 2025</div>
          <h3 className="mt-1 text-lg font-medium">Democratic Innovations in a Digital Age</h3>
          <p className="mt-2 text-sm text-neutral-700">
            A special issue featuring empirical and methodological contributions on participatory
            governance, platform regulation, and information integrity.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm items-center">
            <a href="#" className="btn btn-primary">Read PDF</a>
            <a href="#" className="text-navy-700 hover:underline">Issue page</a>
            <a href="#" className="text-neutral-700 hover:underline">Cite (APA)</a>
            <span className="text-neutral-500">DOI: 10.1234/binarj.v3i1.000</span>
          </div>
        </article>
      </section>

      {/* How to Publish */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="text-2xl font-semibold">How to Publish</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Aims & Scope',
              desc:
                'Original research, methods, and reviews on democracy, governance, civic tech, political behavior, and media ecosystems.',
            },
            {
              title: 'Submission Guidelines',
              desc:
                '6,000–9,000 words, anonymized manuscript, structured abstract (200–250 words), data and code availability statements.',
            },
            {
              title: 'Peer Review',
              desc:
                'Double‑blind review with a typical decision in 6–8 weeks. Desk checks ensure basic fit and ethics compliance.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-5">
              <div className="font-medium">{item.title}</div>
              <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Formatting',
              desc:
                'Follow APA 7th. Include in‑text citations and a complete reference list. Figures as SVG/PNG, tables as HTML or Markdown.',
            },
            {
              title: 'Ethics & Data',
              desc:
                'State IRB/ethics approvals where applicable. Share datasets/code or provide a clear justification for restrictions.',
            },
            {
              title: 'Article Types',
              desc:
                'Research Articles, Brief Reports, Methods Notes, Registered Reports, and Review Essays are welcomed.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-5">
              <div className="font-medium">{item.title}</div>
              <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready to contribute?</h3>
            <p className="text-sm text-neutral-700 mt-1">Share your work with the BINAR community.</p>
          </div>
          <Link to="#submit" className="btn btn-primary">Publish in BINAR Journal</Link>
        </div>
      </section>
    </div>
  )
}

