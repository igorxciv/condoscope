import React, { FC } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { Input } from './input'

export default {
  component: Input,
  title: 'Input',
}

export const regular: FC = () => {
  return (
    <Input placeholder={text('Placeholder', 'Placeholder')} disabled={boolean('Disabled', false)}>
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
