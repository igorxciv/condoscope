import React, { FC, PropsWithChildren } from 'react'
import { ButtonStyled } from './button.styled'
import type { ButtonProps } from './button.types'

export const Button: FC<ButtonProps> = ({
  appearance = 'filled',
  status = 'basic',
  size = 'medium',
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonStyled appearance={appearance} status={status} size={size}>
      {children}
    </ButtonStyled>
  )
}
