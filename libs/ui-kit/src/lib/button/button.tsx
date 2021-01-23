import React, { FC, PropsWithChildren } from 'react'
import { ButtonStyled } from './button.styled'
import type { ButtonProps } from './button.types'

export const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
  const { children, status, appearance, size } = props

  return (
    <ButtonStyled appearance={appearance} status={status} size={size}>
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  appearance: 'filled',
  status: 'basic',
  size: 'medium',
}
