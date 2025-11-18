import { useEffect, useRef } from 'react'

export default function ParallaxHero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--rx', `${y * -6}deg`)
      el.style.setProperty('--ry', `${x * 6}deg`)
      el.style.setProperty('--tx', `${x * 8}px`)
      el.style.setProperty('--ty', `${y * 8}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6">
      <div
        ref={ref}
        className="group relative rounded-xl p-8 text-white [perspective:1000px]"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[conic-gradient(from_90deg_at_50%_50%,rgba(59,130,246,0.12),transparent_30%,rgba(99,102,241,0.12),transparent_60%)] blur-0 transition duration-300 group-hover:blur-sm" />
        <div
          className="relative rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl"
          style={{
            transform: 'rotateX(var(--rx,0)) rotateY(var(--ry,0)) translateZ(0)',
          }}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-sm text-blue-200/80">Featured technology</div>
              <h2 className="text-2xl font-semibold">AeroWeave Fabric</h2>
            </div>
            <div className="relative h-14 w-14 translate-z-10 rounded-lg bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 p-[2px]">
              <div className="absolute inset-0 animate-[spin_6s_linear_infinite] rounded-lg bg-[conic-gradient(from_0deg,rgba(59,130,246,.6),rgba(99,102,241,.6),transparent_60%)]" />
              <div className="relative h-full w-full rounded-lg bg-slate-950/90" />
            </div>
          </div>
          <p className="mt-4 max-w-prose text-sm text-blue-100/90">
            Micro-vented, phase-change fibers keep your body at the perfect temperature while staying incredibly light.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200">
            Hover to tilt • Parallax depths
          </div>
        </div>
      </div>
    </div>
  )
}
