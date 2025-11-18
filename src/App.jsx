import ProductGallery from './components/ProductGallery'
import ProductInfo from './components/ProductInfo'
import ProductDetails from './components/ProductDetails'
import Recommendations from './components/Recommendations'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(99,102,241,0.12),transparent)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Brand" className="h-8 w-8" />
            <span className="text-lg font-semibold tracking-tight">Nebula</span>
          </div>
          <div className="flex items-center gap-2">
            <input className="w-56 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm placeholder:text-blue-200/60 focus:outline-none" placeholder="Search products" />
            <button className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm hover:border-white/40">Sign in</button>
            <button className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900">Cart (0)</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <ProductGallery />
          <ProductInfo />
        </div>

        <section className="mt-12">
          <ProductDetails />
        </section>

        <section className="mt-12">
          <Recommendations />
        </section>
      </main>

      <footer className="mt-16 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-blue-200/80">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="mb-2 font-semibold">About</div>
              <p>Future-forward apparel engineered for focus, comfort and flow.</p>
            </div>
            <div>
              <div className="mb-2 font-semibold">Help</div>
              <p>Shipping, returns, sizing and support</p>
            </div>
            <div>
              <div className="mb-2 font-semibold">Join newsletter</div>
              <div className="flex gap-2">
                <input className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm" placeholder="you@email.com" />
                <button className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-xs">© 2025 Nebula Labs</div>
        </div>
      </footer>
    </div>
  )
}

export default App
