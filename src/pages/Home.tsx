import { Link } from 'react-router-dom'

function Section({ title, children, to }: { title: string; children: React.ReactNode; to?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {to && (
          <Link to={to} className="text-sm text-navy-700 hover:underline">View all</Link>
        )}
      </div>
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 text-yellow-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Evidence for better policy. Ideas for a stronger democracy.</h1>
            <p className="mt-4 text-yellow-100/90">BINAR Indonesia advances rigorous, nonpartisan research on social and political change across Indonesia and Southeast Asia—bridging scholarship, policy, and public debate.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/research" className="btn btn-primary">Explore Research</Link>
              <Link to="/publications" className="btn btn-ghost">Latest Publications</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { label: 'Publications', value: '250+' },
                { label: 'Policy Briefs', value: '80+' },
                { label: 'Newsletter Readers', value: '10k+' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg p-4 border border-white/10 bg-white/5">
                  <div className="text-2xl font-semibold">{kpi.value}</div>
                  <div className="text-sm text-yellow-100/80">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <Section title="Research Themes" to="/research/themes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Digital Democracy','Civic Engagement','Governance & Policy','Media & Disinformation'].map((t) => (
            <Link key={t} to={`/research/themes/${encodeURIComponent(t.toLowerCase().replace(/\s+/g,'-'))}`} className="card p-6">
              <div className="font-medium">{t}</div>
              <p className="text-sm text-neutral-600 mt-2">Short description of the theme and its scope.</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section title="Featured Projects" to="/research/projects">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="card p-6">
              <h3 className="font-medium">Project Title {i}</h3>
              <p className="text-sm text-neutral-600 mt-2">Two-sentence abstract summarizing goals, methods, and relevance.</p>
              <div className="mt-3">
                <Link to="/research/projects/slug" className="text-navy-700 text-sm hover:underline">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Latest Publications */}
      <Section title="Latest Publications" to="/publications">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="card p-6">
              <div className="text-xs text-neutral-500">Policy Brief · 2025</div>
              <h3 className="mt-1 font-medium">Publication Title {i}</h3>
              <div className="mt-3 flex gap-3 text-sm">
                <Link to="/publications/slug" className="text-navy-700 hover:underline">Read</Link>
                <a href="#" className="text-neutral-700 hover:underline">Cite</a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Events */}
      <Section title="Events" to="/events">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="card p-4">
              <div className="text-xs text-neutral-500">12 Dec 2025 · Seminar</div>
              <h3 className="mt-1 font-medium">Event Title {i}</h3>
              <div className="mt-3 flex gap-3 text-sm">
                <a href="#" className="text-navy-700 hover:underline">Register</a>
                <a href="#" className="text-neutral-700 hover:underline">Add to Calendar</a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* News & Insights */}
      <Section title="News & Insights" to="/news">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-lg border border-neutral-200 p-6">
              <div className="text-xs text-neutral-500">Explainer</div>
              <h3 className="mt-1 font-medium">Post Title {i}</h3>
              <p className="text-sm text-neutral-600 mt-2">Brief two-line summary to entice a click.</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section title="Partners">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="h-10 bg-neutral-200 rounded" aria-label="Partner logo placeholder" />
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Subscribe to our newsletter</h2>
          <p className="text-neutral-600 mt-2 text-sm">We respect your privacy. Unsubscribe anytime.</p>
          <form className="mt-4 flex gap-3 max-w-lg">
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" required placeholder="you@example.com" className="flex-1 rounded-md border border-neutral-300 px-3 py-2" />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
