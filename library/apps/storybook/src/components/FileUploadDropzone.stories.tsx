import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import { FileUploadDropzone } from '@chatdaddy/components'

const meta: Meta<typeof FileUploadDropzone> = {
  title: 'Components/Inputs/FileUploadDropzone',
  component: FileUploadDropzone,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showPreviews: { control: 'boolean' },
    accept: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    multiple: true,
    showPreviews: true,
    label: 'Drop files here or click to browse',
    description: 'PNG, JPG, PDF up to 10MB',
  },
}
export default meta

export const Playground: StoryObj<typeof FileUploadDropzone> = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([])
    return (
      <Box sx={{ maxWidth: 480 }}>
        <FileUploadDropzone
          {...args}
          files={files}
          onFiles={(f) => setFiles((prev) => [...prev, ...f])}
          onRemove={(i) => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
        />
      </Box>
    )
  },
}

export const ImageOnly: StoryObj = {
  render: () => {
    const [files, setFiles] = useState<File[]>([])
    return (
      <Box sx={{ maxWidth: 480 }}>
        <FileUploadDropzone
          accept="image/*"
          multiple
          showPreviews
          label="Upload images"
          description="PNG, JPG, GIF up to 5MB each"
          files={files}
          onFiles={(f) => setFiles((prev) => [...prev, ...f])}
          onRemove={(i) => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
        />
      </Box>
    )
  },
}

export const SingleFile: StoryObj = {
  render: () => {
    const [files, setFiles] = useState<File[]>([])
    return (
      <Box sx={{ maxWidth: 480 }}>
        <FileUploadDropzone
          multiple={false}
          showPreviews
          label="Upload your logo"
          description="PNG or SVG, max 2MB"
          files={files}
          onFiles={(f) => setFiles([f[0]])}
          onRemove={() => setFiles([])}
        />
      </Box>
    )
  },
}

export const Disabled: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <FileUploadDropzone disabled onFiles={() => {}} label="Upload disabled" />
    </Box>
  ),
}
