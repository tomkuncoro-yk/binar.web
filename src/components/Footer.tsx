export function Footer() {
  return (
    <footer className="mt-16 bg-navy-900 text-yellow-100">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold text-yellow-50 mb-2">BINAR Indonesia</div>
          <p className="opacity-90">Evidence for better policy. Ideas for a stronger democracy.</p>
          <p className="mt-3 opacity-80">© {new Date().getFullYear()} BINAR Indonesia</p>
        </div>
        <div>
          <div className="font-medium text-yellow-50 mb-2">Offices</div>
          <p>Jakarta</p>
          <p>Yogyakarta</p>
        </div>
        <div>
          <div className="font-medium text-yellow-50 mb-2">Contact</div>
          <p>press@binar.id</p>
          <p>Media enquiries: response within 24–48h</p>
        </div>
        <div>
          <div className="font-medium text-yellow-50 mb-2">Follow</div>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-yellow-200">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-200">LinkedIn</a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-200">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

