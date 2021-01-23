import React, { FC, PropsWithChildren } from 'react'
import { InputGroupStyled, InputStyled, InputLabelStyled } from './input.styled'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = (props: PropsWithChildren<InputProps>) => {
  const { children, kind } = props
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
      <InputStyled type={kind} />
    </InputGroupStyled>
  )
}

Input.defaultProps = {
  size: 'medium',
  kind: 'text',
}
