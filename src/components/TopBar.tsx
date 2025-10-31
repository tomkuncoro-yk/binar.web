export function TopBar() {
  return (
    <div className="bg-navy-900 text-yellow-100 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Switch to English" className="hover:text-yellow-200">EN</button>
          <span aria-hidden>/</span>
          <button aria-label="Switch to Bahasa Indonesia" className="hover:text-yellow-200">ID</button>
        </div>
        <div className="flex gap-4">
          <a href="/contact" className="hover:text-white">Jakarta · Yogyakarta</a>
          <a href="mailto:press@binar.id" className="hover:text-white">press@binar.id</a>
          <a href="tel:+6221XXXXXXX" className="hover:text-white">+62 (21) 0000 000</a>
        </div>
      </div>
    </div>
  )
}
