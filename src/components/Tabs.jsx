import { useState } from 'react'

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue)

  // Separate out TabsList and TabsContent
  const list = []
  const contents = []
  const rest = []

  // @ts-ignore
  children?.forEach?.((child) => {
    if (child?.type?.displayName === 'TabsList') list.push(child)
    else if (child?.type?.displayName === 'TabsContent') contents.push(child)
    else rest.push(child)
  })

  return (
    <div>
      {list.map((l, i) => (
        // @ts-ignore
        <l.type {...l.props} key={i} value={value} onChange={setValue} />
      ))}
      <div className="mt-4">
        {contents.map((c, i) => (
          // @ts-ignore
          <c.type {...c.props} key={i} activeValue={value} />
        ))}
      </div>
      {rest}
    </div>
  )
}

export function TabsList({ children, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {children?.map((child, i) => (
        // @ts-ignore
        <child.type {...child.props} key={i} current={value} onChange={onChange} />
      ))}
    </div>
  )
}
TabsList.displayName = 'TabsList'

export function TabsTrigger({ value, children, current, onChange }) {
  const active = current === value
  return (
    <button
      onClick={() => onChange(value)}
      className={`rounded-lg border px-3 py-2 text-sm transition ${
        active ? 'border-white bg-white text-slate-900' : 'border-white/10 bg-slate-800/40 text-white hover:border-white/40'
      }`}
    >
      {children}
    </button>
  )
}
TabsTrigger.displayName = 'TabsTrigger'

export function TabsContent({ value, activeValue, children }) {
  if (value !== activeValue) return null
  return <div>{children}</div>
}
TabsContent.displayName = 'TabsContent'
