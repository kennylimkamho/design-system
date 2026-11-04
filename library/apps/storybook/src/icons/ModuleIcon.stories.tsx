import type { Meta, StoryObj } from '@storybook/react'
import { Box, Typography } from '@mui/material'
import { ModuleIcon } from '@chatdaddy/icons'
import type { ModuleIconName } from '@chatdaddy/icons'

const modules: ModuleIconName[] = [
  'inbox', 'contacts', 'crm', 'automation', 'broadcasts', 'channels',
  'integration', 'analytics', 'ai', 'shop', 'calls', 'settings',
]

function ModuleIconGallery() {
  return <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 1.5 }}>
    {modules.map(name => <Box key={name} sx={{ border: '1px solid #DCE0E7', borderRadius: 2, p: 2, display: 'grid', gap: 1, justifyItems: 'center', color: '#323F4B' }}>
      <ModuleIcon name={name} size={32} />
      <Typography sx={{ fontSize: 12, fontWeight: 650 }}>{name}</Typography>
    </Box>)}
  </Box>
}

function SurfaceComparison() {
  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
    {(['#FFFFFF', '#EEF2F6', '#1F2933'] as const).map(surface => <Box key={surface} sx={{ width: 220, borderRadius: 2, p: 2, bgcolor: surface, color: surface === '#1F2933' ? '#FFFFFF' : '#323F4B', border: '1px solid #DCE0E7' }}>
      <Typography sx={{ fontSize: 12, mb: 2 }}>{surface}</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <ModuleIcon name="integration" size={28} accentColor={surface === '#1F2933' ? '#78A2FF' : undefined} />
        <ModuleIcon name="ai" size={28} accentColor={surface === '#1F2933' ? '#78A2FF' : undefined} />
        <ModuleIcon name="crm" size={28} accentColor={surface === '#1F2933' ? '#78A2FF' : undefined} />
      </Box>
    </Box>)}
  </Box>
}

const meta: Meta = { title: 'Icons/ModuleIcon', tags: ['autodocs'] }
export default meta
export const AllApprovedModules: StoryObj = { render: () => <ModuleIconGallery /> }
export const LightAndDarkSurfaces: StoryObj = { render: () => <SurfaceComparison /> }
