export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-wc_text/80">
        <div className="flex items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Whitecircle</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-wc_lime">Instagram</a>
            <a href="#" className="hover:text-wc_lime">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

