import React, { FC } from 'react'
import { UiKit, UiKitProps } from './ui-kit'

export default {
  component: UiKit,
  title: 'UiKit',
}

export const primary: FC = () => {
  /* eslint-disable-next-line */
  const props: UiKitProps = {};

  return <UiKit />
}
