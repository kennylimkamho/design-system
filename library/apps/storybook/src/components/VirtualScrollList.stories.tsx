import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, ListItemText, ListItemButton, Typography } from '@mui/material'
import { VirtualScrollList } from '@chatdaddy/components'

const makeItems = (n: number) =>
  Array.from({ length: n }, (_, i) => ({ id: String(i + 1), name: `Item ${i + 1}`, sub: `Subtitle for item ${i + 1}` }))

const meta: Meta = {
  title: 'Components/Display/VirtualScrollList',
  tags: ['autodocs'],
}
export default meta

export const SmallList: StoryObj = {
  render: () => {
    const items = makeItems(20)
    return (
      <Box sx={{ maxWidth: 320, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <VirtualScrollList
          items={items}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <ListItemButton>
              <ListItemText primary={item.name} secondary={item.sub} />
            </ListItemButton>
          )}
          itemHeight={56}
          height={300}
          emptyMessage="No items found"
        />
      </Box>
    )
  },
}

export const LargeVirtualized: StoryObj = {
  render: () => {
    const items = makeItems(500)
    return (
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block', color: 'text.secondary' }}>
          500 items — virtualized automatically
        </Typography>
        <Box sx={{ maxWidth: 320, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
          <VirtualScrollList
            items={items}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            )}
            itemHeight={48}
            height={320}
          />
        </Box>
      </Box>
    )
  },
}

export const EmptyState: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 320, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <VirtualScrollList
        items={[]}
        keyExtractor={(item: { id: string }) => item.id}
        renderItem={() => null}
        emptyMessage="No results found"
        height={200}
      />
    </Box>
  ),
}

export const LoadingState: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 320, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <VirtualScrollList
        items={[]}
        keyExtractor={(item: { id: string }) => item.id}
        renderItem={() => null}
        loading
        height={200}
      />
    </Box>
  ),
}
