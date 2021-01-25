import React, { FC } from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { Input } from './input'

export default {
  component: Input,
  title: 'Input',
}

export const regular: FC = () => {
  return (
    <Input
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      mass={select('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }, 'medium')}
      appearance={select('Appearance', {
        Basic: 'basic',
        Primary: 'primary',
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
      }, 'basic')}
    >
      {text('Label', 'Label')}
    </Input>
  )
}

export const password: FC = () => {
  return (
    <Input placeholder={text('Placeholder', 'Password')} kind="password">
      {text('Label', 'Password')}
    </Input>
  )
}

export const number: FC = () => {
  return (
    <Input placeholder={text('Placeholder', '12345')} kind="number">
      {text('Label', 'Number')}
    </Input>
  )
}

export const email: FC = () => {
  return (
    <Input placeholder={text('Placeholder', 'email@me.com')} kind="email">
      {text('Label', 'E-mail')}
    </Input>
  )
}
