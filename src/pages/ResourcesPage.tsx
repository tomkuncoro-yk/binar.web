export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Resources & Data</h1>
      <p className="mt-3 text-neutral-700">Dataset DOIs, licenses, download terms, and code repositories.</p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2].map((i)=> (
          <li key={i} className="card p-5">
            <div className="text-xs text-neutral-500">Dataset · CC BY 4.0</div>
            <div className="mt-1 font-medium">Dataset Title {i}</div>
            <div className="mt-3 flex gap-4 text-sm">
              <a href="#" className="text-navy-700 hover:underline">DOI</a>
              <a href="#" className="text-neutral-700 hover:underline">Download</a>
              <a href="#" className="text-neutral-700 hover:underline">Code</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
