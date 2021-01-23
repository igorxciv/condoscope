import React, { FC, PropsWithChildren } from 'react'
import { InputGroupStyled, InputStyled, InputLabelStyled } from './input.styled'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = ({ type = 'text', children }: PropsWithChildren<InputProps>) => {
  const label = children ? (
    <InputLabelStyled>
      {children}
    </InputLabelStyled>
  ) : (
    <InputLabelStyled aria-hidden="true">
      Empty Label
    </InputLabelStyled>
  )

  return (
    <InputGroupStyled>
      {label}
      <InputStyled type={type} />
    </InputGroupStyled>
  )
}
