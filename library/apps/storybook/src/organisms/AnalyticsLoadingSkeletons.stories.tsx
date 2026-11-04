import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ChartLoadingSkeleton, TableLoadingSkeleton } from '@chatdaddy/components'

type State = 'loading' | 'ready' | 'error' | 'cancelled'

function SkeletonDemo() {
  const [state, setState] = useState<State>('loading')
  const [narrow, setNarrow] = useState(false)
  const [reduced, setReduced] = useState(false)
  const loading = state === 'loading'

  return <Box sx={{ p: 3, maxWidth: narrow ? 420 : 960, mx: 'auto', bgcolor: '#F7F9FB' }}>
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }} aria-label="Preview controls">
      {(['loading', 'ready', 'error', 'cancelled'] as State[]).map((option) => <Button key={option} variant={state === option ? 'contained' : 'outlined'} onClick={() => setState(option)}>{option}</Button>)}
      <Button variant="outlined" onClick={() => setNarrow((value) => !value)}>{narrow ? 'Wide preview' : 'Narrow preview'}</Button>
      <Button variant="outlined" onClick={() => setReduced((value) => !value)} aria-pressed={reduced}>{reduced ? 'Motion reduced' : 'Reduce motion'}</Button>
    </Box>
    <Typography sx={{ color: '#596B7E', fontSize: 13, mb: 2 }}>Only neutral placeholders appear while loading. The consumer owns the real data, error and cancellation states; no timer or fabricated metrics are used.</Typography>
    {loading ? <Box sx={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: 2 }} aria-busy="true">
      <ChartLoadingSkeleton reduceMotion={reduced} label="Chart loading" />
      <TableLoadingSkeleton reduceMotion={reduced} label="Table loading" />
    </Box> : <Box role="status" aria-busy="false" sx={{ minHeight: 214, display: 'grid', placeItems: 'center', border: '1px solid #DDE5EB', borderRadius: 2, bgcolor: '#FFFFFF', color: '#485D71', p: 3, textAlign: 'center' }}>
      {state === 'ready' ? 'Ready: consumer renders its verified chart and table here.' : state === 'error' ? 'Error: consumer shows an actionable retry state here.' : 'Cancelled: request ended; skeleton motion has stopped.'}
    </Box>}
  </Box>
}

const meta: Meta = { title: 'Organisms/Analytics loading skeletons', tags: ['autodocs'] }
export default meta
export const ChartAndTable: StoryObj = { render: () => <SkeletonDemo /> }
