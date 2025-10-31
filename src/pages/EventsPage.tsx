const UPCOMING = [
  { id: 'e1', date: '2025-12-12', title: 'Civic Tech Seminar', type: 'Seminar', register: '#' },
  { id: 'e2', date: '2026-01-16', title: 'Disinformation Workshop', type: 'Workshop', register: '#' },
]
const PAST = [
  { id: 'e3', date: '2025-03-01', title: 'Policy Conference 2025', type: 'Conference', slides: '#', recording: '#' },
]

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Events</h1>

      <h2 className="mt-8 text-xl font-medium">Upcoming</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {UPCOMING.map((e) => (
          <li key={e.id} className="card p-5">
            <div className="text-xs text-neutral-500">{new Date(e.date).toLocaleDateString()} · {e.type}</div>
            <div className="mt-1 font-medium">{e.title}</div>
            <div className="mt-3 flex gap-4 text-sm">
              <a href={e.register} className="text-navy-700 hover:underline">Register</a>
              <a href={`data:text/calendar,BEGIN:VCALENDAR`} className="text-neutral-700 hover:underline">iCal</a>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-medium">Past</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PAST.map((e) => (
          <li key={e.id} className="card p-5">
            <div className="text-xs text-neutral-500">{new Date(e.date).toLocaleDateString()} · {e.type}</div>
            <div className="mt-1 font-medium">{e.title}</div>
            <div className="mt-3 flex gap-4 text-sm">
              <a href={e.slides} className="text-neutral-700 hover:underline">Slides</a>
              <a href={e.recording} className="text-neutral-700 hover:underline">Recording</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
