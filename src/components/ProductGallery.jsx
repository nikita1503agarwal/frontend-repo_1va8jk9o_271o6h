import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react'

const images = [
  '/pdp/hero-1.jpg',
  '/pdp/hero-2.jpg',
  '/pdp/hero-3.jpg',
  '/pdp/hero-4.jpg',
]

function ensureImages() {
  // Fallback to gradient placeholders if images are not found in public
  return images.map((src, i) => ({
    src,
    alt: `Product image ${i + 1}`,
    placeholder: `https://picsum.photos/seed/pdp-${i}/1200/1200`,
  }))
}

export default function ProductGallery() {
  const items = ensureImages()
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  const go = (dir) => {
    setIndex((prev) => (prev + dir + items.length) % items.length)
  }

  return (
    <div className="w-full">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-800">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={items[index].src}
            src={items[index].src}
            onError={(e) => {
              e.currentTarget.src = items[index].placeholder
            }}
            alt={items[index].alt}
            className={`h-full w-full object-cover transition ${zoom ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            onClick={() => setZoom((z) => !z)}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-slate-900/10" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
          <button onClick={() => go(-1)} className="rounded-full bg-slate-900/60 p-2 backdrop-blur text-white hover:bg-slate-900/80">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <button onClick={() => setZoom((z) => !z)} className="rounded-full bg-slate-900/60 p-2 backdrop-blur text-white hover:bg-slate-900/80">
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              setZoom(false)
            }}
            className={`aspect-square overflow-hidden rounded-xl border transition ${
              i === index ? 'border-white' : 'border-white/10 hover:border-white/40'
            }`}
          >
            <img
              src={item.src}
              onError={(e) => (e.currentTarget.src = item.placeholder)}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}

        <button className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-800/50 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
          <Play className="h-6 w-6" />
          <span className="sr-only">Play product video</span>
        </button>
      </div>
    </div>
  )
}
