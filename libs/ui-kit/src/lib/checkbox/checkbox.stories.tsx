import React, { FC } from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { Checkbox } from './checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const Regular: FC = () => {
  return (
    <Checkbox
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      appearance={select('Appearance', {
        Basic: 'basic',
        Primary: 'primary',
      }, 'basic')}
    >
      {text('Label', 'Checkbox')}
    </Checkbox>
  )
}
