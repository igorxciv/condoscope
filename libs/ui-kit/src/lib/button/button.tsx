import React, { FC, PropsWithChildren } from 'react'
import { ButtonStyled } from './button.styled'
import type { ButtonProps } from './button.types'

export const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
  const { children } = props

  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  appearance: 'filled',
  status: 'basic',
  size: 'medium',
}
