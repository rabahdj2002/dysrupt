import { useEffect, useRef } from 'react'

export interface Trace {
  label: string
  color: string
  unit: string
  get: () => number
  scale: (v: number) => number // normalize to ~[-1,1]
}

/** Canvas oscilloscope — draws a scrolling trace at display refresh. */
export default function Scope({ traces, seconds = 10 }: { traces: Trace[]; seconds?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const hist = useRef<number[][]>(traces.map(() => []))
  const times = useRef<number[]>([])

  useEffect(() => {
    hist.current = traces.map(() => [])
    times.current = []
    let raf: number
    let last = performance.now()
    const draw = () => {
      raf = requestAnimationFrame(draw)
      const now = performance.now()
      const dt = (now - last) / 1000
      last = now
      const c = ref.current
      if (!c) return
      const ctx = c.getContext('2d')!
      const W = (c.width = c.clientWidth * devicePixelRatio)
      const H = (c.height = c.clientHeight * devicePixelRatio)

      times.current.push(now / 1000)
      traces.forEach((tr, i) => hist.current[i].push(tr.scale(tr.get())))
      const cutoff = now / 1000 - seconds
      while (times.current[0] < cutoff) {
        times.current.shift()
        hist.current.forEach((h) => h.shift())
      }

      ctx.fillStyle = '#0b0f14'
      ctx.fillRect(0, 0, W, H)
      ctx.strokeStyle = '#1c2440'
      ctx.lineWidth = 1
      for (let g = 1; g < 4; g++) {
        ctx.beginPath()
        ctx.moveTo(0, (H * g) / 4)
        ctx.lineTo(W, (H * g) / 4)
        ctx.stroke()
      }

      const n = times.current.length
      traces.forEach((tr, i) => {
        ctx.strokeStyle = tr.color
        ctx.lineWidth = 1.5 * devicePixelRatio
        ctx.beginPath()
        for (let k = 0; k < n; k++) {
          const x = W - ((now / 1000 - times.current[k]) / seconds) * W
          const y = H / 2 - (hist.current[i][k] * H) / 2.2
          k === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })
      void dt
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [traces, seconds])

  return (
    <div className="relative h-full w-full">
      <canvas ref={ref} className="h-full w-full rounded-lg" />
      <div className="absolute left-2 top-2 flex gap-3">
        {traces.map((t) => (
          <span key={t.label} className="mono text-[10px]" style={{ color: t.color }}>
            {t.label} <span className="text-muted">{t.get().toFixed(1)}{t.unit}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
