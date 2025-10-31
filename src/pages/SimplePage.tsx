export default function SimplePage({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children && <div className="prose prose-neutral mt-6 max-w-none">{children}</div>}
    </section>
  )
}

