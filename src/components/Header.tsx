import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const nav = [
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/journal', label: 'Journal' },
  { to: '/news', label: 'News & Insights' },
  { to: '/events', label: 'Events' },
  { to: '/education', label: 'Education & Training' },
  { to: '/partnerships', label: 'Partnerships' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-semibold text-lg text-navy-900">BINAR Indonesia</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm hover:text-navy-900 ${isActive ? 'text-navy-900 font-medium' : 'text-navy-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <input aria-label="Search" placeholder="Search" className="text-sm rounded-md border border-neutral-300 px-3 py-1.5 focus:border-navy-700" />
            <Link to="/subscribe" className="ml-2 btn btn-primary">Subscribe</Link>
          </nav>
          <div className="md:hidden">
            <button aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-neutral-100">
              <span className="block w-5 h-0.5 bg-neutral-900 mb-1"/>
              <span className="block w-5 h-0.5 bg-neutral-900 mb-1"/>
              <span className="block w-5 h-0.5 bg-neutral-900"/>
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" className="md:hidden pb-4" aria-label="Mobile">
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} className="px-2 py-2 rounded hover:bg-neutral-100" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link to="/subscribe" className="px-2 py-2 rounded btn-primary" onClick={() => setOpen(false)}>
                Subscribe
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
