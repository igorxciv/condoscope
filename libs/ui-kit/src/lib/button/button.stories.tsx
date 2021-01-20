import React, { FC } from 'react'
import { select, text } from '@storybook/addon-knobs'
import { Button } from './button'

export default {
  component: Button,
  title: 'Button',
}

export const filled: FC = () => {
  return (
    <Button
      size={select('Size', {
        Tiny: 'tiny',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Giant: 'giant',
      }, 'medium')}
      color={select('Color', {
        Basic: 'basic',
        Primary: 'primary',
        Success: 'success',
        Info: 'info',
        Warning: 'warning',
        Danger: 'danger',
      }, 'basic')}
    >
      {text('Label', 'Button')}
    </Button>
  )
}
