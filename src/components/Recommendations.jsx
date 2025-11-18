import { Star } from 'lucide-react'

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Quantum Tee ${i + 1}`,
  price: (38 + i * 2).toFixed(0),
  image: `https://picsum.photos/seed/reco-${i}/600/600`,
  rating: 4 + (i % 2 ? 0 : 0.5),
}))

export default function Recommendations() {
  return (
    <div className="text-white">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">You may also like</h3>
        <button className="text-sm text-blue-300/80 hover:text-white">View all</button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-xl border border-white/10 bg-slate-800/40">
            <div className="relative aspect-square overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="space-y-1 p-3">
              <div className="truncate font-medium">{p.title}</div>
              <div className="flex items-center gap-2 text-sm text-blue-200/80">
                <div className="flex items-center text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 ${i < 4 ? 'fill-amber-400' : 'fill-transparent'}`} />
                  ))}
                </div>
                <span>({(Math.random() * 150 + 50).toFixed(0)})</span>
              </div>
              <div className="text-sm">${p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
