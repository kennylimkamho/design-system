import { useEffect, useRef, useState } from 'react'
import { keyframes } from '@emotion/react'
import { Box, useMediaQuery } from '@mui/material'

const hop = keyframes`0%,100%{transform:translateY(0)}45%{transform:translateY(-3px)}`
const breathe = keyframes`0%,100%{opacity:.62}50%{opacity:1}`
const sweep = keyframes`0%{transform:translateX(-38%);opacity:.12}50%{opacity:.34}100%{transform:translateX(38%);opacity:.12}`

export interface AnalyticsLoadingSkeletonProps {
  /** Driven by the real request state. When false, the skeleton unmounts; caller renders ready/error/cancelled UI. */
  active?: boolean
  /** Screen-reader announcement; no visible content is inserted into the placeholder. */
  label?: string
  /** Optional additional reduction for previews or host preferences; OS reduced motion always wins. */
  reduceMotion?: boolean
}

export interface TableLoadingSkeletonProps extends AnalyticsLoadingSkeletonProps {
  /** Only a few anonymous rows; values are clamped to keep loading low-information. */
  rows?: number
}

function useRunningMotion(active: boolean, forceReducedMotion: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [inView, setInView] = useState(true)
  const [tabVisible, setTabVisible] = useState(true)

  useEffect(() => {
    if (!active) return
    const updateTab = () => setTabVisible(!document.hidden)
    updateTab()
    document.addEventListener('visibilitychange', updateTab)
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined')
      return () => document.removeEventListener('visibilitychange', updateTab)
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.01 })
    observer.observe(node)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', updateTab)
    }
  }, [active])

  return { ref, running: active && inView && tabVisible && !reduceMotion && !forceReducedMotion }
}

/** Low-information, stable-height chart placeholder. Never embeds chart values or a fabricated trend. */
export function ChartLoadingSkeleton({ active = true, label = '圖表載入中', reduceMotion = false }: AnalyticsLoadingSkeletonProps) {
  const { ref, running } = useRunningMotion(active, reduceMotion)
  if (!active) return null
  return <Box ref={ref} role="status" aria-label={label} aria-busy="true" sx={{ minHeight: 214, width: '100%', boxSizing: 'border-box', border: '1px solid #E1E6EB', borderRadius: '12px', bgcolor: '#FFFFFF', p: 2, overflow: 'hidden' }}>
    <Box aria-hidden="true">
      <Box sx={{ width: 88, height: 9, borderRadius: '4px', bgcolor: '#D6DEE4', mb: 2 }} />
      <Box sx={{ height: 142, display: 'flex', gap: 'clamp(8px, 2vw, 18px)', justifyContent: 'center', alignItems: 'end', borderBottom: '1px solid #E6EBEF', pb: 1.5 }}>
        {[42, 53, 45, 56, 48, 43].map((height, index) => <Box key={index} sx={{ width: 'min(13%, 42px)', minWidth: 14, height: `${height}%`, bgcolor: index === 3 ? '#B8E4DF' : '#D9E1E6', borderRadius: '5px 5px 2px 2px', animation: `${hop} 1700ms ease-in-out infinite`, animationDelay: `${index * 85}ms`, animationPlayState: running ? 'running' : 'paused', '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }} />)}
      </Box>
    </Box>
  </Box>
}

/** A handful of neutral row shapes, not a fake campaign table. */
export function TableLoadingSkeleton({ active = true, label = '表格載入中', rows = 4, reduceMotion = false }: TableLoadingSkeletonProps) {
  const { ref, running } = useRunningMotion(active, reduceMotion)
  if (!active) return null
  const count = Math.max(3, Math.min(6, Math.round(Number.isFinite(rows) ? rows : 4)))
  return <Box ref={ref} role="status" aria-label={label} aria-busy="true" sx={{ minHeight: 214, width: '100%', boxSizing: 'border-box', border: '1px solid #E1E6EB', borderRadius: '12px', bgcolor: '#FFFFFF', p: 2, overflow: 'hidden' }}>
    <Box aria-hidden="true" sx={{ display: 'grid', gap: 1.5 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 2, pb: 1, borderBottom: '1px solid #E9EDF1' }}>
        {[64, 44, 52].map((width, i) => <Box key={i} sx={{ width: `${width}%`, height: 8, borderRadius: '4px', bgcolor: '#D5DDE3' }} />)}
      </Box>
      {Array.from({ length: count }, (_, row) => <Box key={row} sx={{ position: 'relative', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 2, alignItems: 'center', height: 30, overflow: 'hidden', borderBottom: '1px solid #F1F3F5', animation: `${breathe} 1750ms ease-in-out infinite`, animationDelay: `${row * 105}ms`, animationPlayState: running ? 'running' : 'paused', '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 1 } }}>
        {[row % 2 ? 56 : 72, 38, 48].map((width, cell) => <Box key={cell} sx={{ width: `${width}%`, height: cell === 0 ? 9 : 7, borderRadius: '4px', bgcolor: cell === 2 && row === 1 ? '#D2EAE6' : '#D9E1E6' }} />)}
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(210,224,230,.25)', animation: `${sweep} 2300ms ease-in-out infinite`, animationDelay: `${row * 115}ms`, animationPlayState: running ? 'running' : 'paused', pointerEvents: 'none', '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 0 } }} />
      </Box>)}
    </Box>
  </Box>
}
