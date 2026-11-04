import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material'
import { Search, Eye, EyeOff, Mail, Phone, Lock } from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'flex-start' }}>
        {children}
      </Box>
    </Box>
  )
}

function PasswordField() {
  const [show, setShow] = useState(false)
  return (
    <TextField
      label="Password"
      type={show ? 'text' : 'password'}
      defaultValue="mysecretpassword"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock size={15} style={{ opacity: 0.5 }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton size="small" onClick={() => setShow((s) => !s)} edge="end">
              {show ? <EyeOff size={15} /> : <Eye size={15} />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ width: 280 }}
    />
  )
}

function FormFieldStory() {
  return (
    <Box sx={{ maxWidth: 640 }}>
      <Section title="Default text input">
        <TextField label="Name" placeholder="Enter your name" sx={{ width: 280 }} />
        <TextField label="Email" placeholder="you@company.com" sx={{ width: 280 }} />
      </Section>

      <Section title="With label + error">
        <TextField
          label="Phone number"
          defaultValue="not-a-phone"
          error
          helperText="Enter a valid phone number"
          sx={{ width: 280 }}
        />
        <TextField
          label="Email"
          defaultValue="bad@"
          error
          helperText="Invalid email address"
          sx={{ width: 280 }}
        />
      </Section>

      <Section title="With helper text">
        <TextField
          label="Team name"
          helperText="This will be shown to your customers"
          sx={{ width: 280 }}
        />
        <TextField
          label="Webhook URL"
          helperText="Must start with https://"
          sx={{ width: 280 }}
        />
      </Section>

      <Section title="With adornments">
        <TextField
          label="Search"
          placeholder="Search contacts…"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={15} style={{ opacity: 0.5 }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: 280 }}
        />
        <TextField
          label="Email"
          placeholder="you@company.com"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={15} style={{ opacity: 0.5 }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: 280 }}
        />
        <TextField
          label="Phone"
          placeholder="+1 (555) 000-0000"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone size={15} style={{ opacity: 0.5 }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: 280 }}
        />
      </Section>

      <Section title="Search variant (grey background)">
        <TextField
          placeholder="Search chats…"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={14} style={{ opacity: 0.45 }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: 260,
            '& .MuiOutlinedInput-root': {
              bgcolor: '#F3F4F6',
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: '1.5px solid', borderColor: 'primary.main' },
            },
          }}
        />
      </Section>

      <Section title="Textarea (multiline)">
        <TextField
          label="Message"
          multiline
          rows={3}
          placeholder="Type a message…"
          sx={{ width: 340 }}
        />
        <TextField
          label="Notes"
          multiline
          minRows={2}
          maxRows={6}
          placeholder="Add a note about this contact…"
          helperText="Auto-expands up to 6 rows"
          sx={{ width: 340 }}
        />
      </Section>

      <Section title="Disabled state">
        <TextField label="Name" defaultValue="Akil Mutawakkil" disabled sx={{ width: 280 }} />
        <TextField label="Role" defaultValue="Admin" disabled sx={{ width: 280 }} />
      </Section>

      <Section title="Password field">
        <PasswordField />
      </Section>

      <Section title="Full form example">
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '16px',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
            Contact Details
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField label="First name" placeholder="John" />
            <TextField label="Last name" placeholder="Doe" />
          </Box>
          <TextField
            label="Email"
            placeholder="john@example.com"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail size={15} style={{ opacity: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone"
            placeholder="+1 (555) 000-0000"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone size={15} style={{ opacity: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Notes"
            multiline
            rows={3}
            fullWidth
            placeholder="Add notes about this contact…"
          />
        </Box>
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Molecules/FormField',
  component: FormFieldStory,
  tags: ['autodocs'],
}
export default meta

export const AllFormFields: StoryObj = { render: () => <FormFieldStory /> }
