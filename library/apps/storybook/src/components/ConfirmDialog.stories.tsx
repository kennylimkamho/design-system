import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Button, Box } from '@mui/material'
import { ConfirmDialog } from '@chatdaddy/components'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/Feedback/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    confirmColor: { control: 'select', options: ['primary', 'error', 'warning', 'success'] },
    maxWidth: { control: 'radio', options: ['xs', 'sm', 'md'] },
  },
}
export default meta

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
        <ConfirmDialog
          open={open}
          title="Are you sure?"
          description="This action cannot be undone. All selected items will be permanently deleted."
          onConfirm={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </>
    )
  },
}

export const Destructive: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>Delete</Button>
        <ConfirmDialog
          open={open}
          title="Delete contact?"
          description="John Doe and all their conversation history will be permanently removed."
          confirmLabel="Delete"
          confirmColor="error"
          onConfirm={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </>
    )
  },
}

export const Loading: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleConfirm = async () => {
      setLoading(true)
      await new Promise((r) => setTimeout(r, 2000))
      setLoading(false)
      setOpen(false)
    }
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Archive team</Button>
        <ConfirmDialog
          open={open}
          title="Archive team?"
          description="The team will be archived and members will lose access."
          confirmLabel="Archive"
          loading={loading}
          onConfirm={handleConfirm}
          onCancel={() => !loading && setOpen(false)}
        />
      </>
    )
  },
}
