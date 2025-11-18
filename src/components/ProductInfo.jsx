import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Truck, ShieldCheck, Repeat, Heart } from 'lucide-react'

const sizes = ['XS','S','M','L','XL']
const colors = [
  { name: 'Midnight', class: 'bg-slate-900', ring: 'ring-slate-500' },
  { name: 'Ocean', class: 'bg-blue-600', ring: 'ring-blue-400' },
  { name: 'Blush', class: 'bg-rose-500', ring: 'ring-rose-300' },
  { name: 'Moss', class: 'bg-emerald-600', ring: 'ring-emerald-400' },
]

export default function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [qty, setQty] = useState(1)

  return (
    <div className="text-white">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/40 px-3 py-1 text-xs text-blue-200">
        Limited Release
      </div>

      <h1 className="mb-2 text-4xl font-bold tracking-tight">Nebula Tech Hoodie</h1>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex items-center text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-amber-400' : 'fill-transparent'}`} />
          ))}
        </div>
        <span className="text-sm text-blue-200/80">(128 reviews)</span>
      </div>

      <div className="mb-6 flex items-end gap-3">
        <div className="text-3xl font-bold">$128</div>
        <div className="text-blue-300/60 line-through">$168</div>
        <div className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">24% off</div>
      </div>

      <p className="mb-6 max-w-prose text-blue-100/90">
        Designed for deep work and deep space. Ultra-soft recycled fibers, thermal-regulating weave, and a subtle sheen that shifts like the night sky.
      </p>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-2 text-sm text-blue-200/80">Color</div>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                className={`h-9 w-9 rounded-full ring-2 transition ${c.class} ${selectedColor.name === c.name ? c.ring : 'ring-transparent'} hover:scale-105`}
                aria-label={c.name}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 text-sm text-blue-200/80">Size</div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`rounded-lg border px-3 py-2 text-sm transition ${
                  selectedSize === s ? 'border-white bg-white text-slate-900' : 'border-white/10 bg-slate-800/40 text-white hover:border-white/40'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="flex items-center rounded-lg border border-white/10 bg-slate-800/40">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-xl">-</button>
          <div className="w-12 text-center">{qty}</div>
          <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-xl">+</button>
        </div>
        <button className="flex-1 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-xl">
          Add to Cart
        </button>
        <button aria-label="Wishlist" className="rounded-xl border border-white/10 bg-slate-800/40 p-3 hover:border-white/40">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-slate-800/40 p-3 text-sm">
          <div className="mb-1 flex items-center gap-2 font-medium"><Truck className="h-4 w-4" /> Free shipping</div>
          <div className="text-blue-200/80">On orders over $75</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-800/40 p-3 text-sm">
          <div className="mb-1 flex items-center gap-2 font-medium"><ShieldCheck className="h-4 w-4" /> 2-year warranty</div>
          <div className="text-blue-200/80">Quality guaranteed</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-800/40 p-3 text-sm">
          <div className="mb-1 flex items-center gap-2 font-medium"><Repeat className="h-4 w-4" /> Free returns</div>
          <div className="text-blue-200/80">30-day window</div>
        </div>
      </div>
    </div>
  )
}
