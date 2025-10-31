export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-medium text-neutral-900">Media Enquiries</h2>
          <p className="text-neutral-700">press@binar.id — response within 24–48h</p>
        </div>
        <div>
          <h2 className="font-medium text-neutral-900">Offices</h2>
          <p>Jakarta · Yogyakarta</p>
          <p className="text-neutral-700">Mailing address available on request</p>
        </div>
        <div>
          <h2 className="font-medium text-neutral-900">General Contact</h2>
          <p className="text-neutral-700">hello@binar.id</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-[16/9] bg-neutral-200 rounded" aria-label="Jakarta map" />
        <div className="aspect-[16/9] bg-neutral-200 rounded" aria-label="Yogyakarta map" />
      </div>
    </section>
  )
}

