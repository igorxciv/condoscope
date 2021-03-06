import React from 'react'

export type InputProps = {
  kind?: 'text' | 'number' | 'email' | 'password'
  mass?: 'small' | 'medium' | 'large'
  appearance?: 'basic' | 'success' | 'info' | 'warning' | 'danger' | 'primary'
  placeholder?: string
  disabled?: boolean
  inputIcon?: React.ReactNode
  caption?: React.ReactNode
}
