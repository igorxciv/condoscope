import React, { FC, PropsWithChildren } from 'react'
import { InputGroupStyled, InputStyled, InputLabelStyled } from './input.styled'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = (props: PropsWithChildren<InputProps>) => {
  const { children, kind, appearance, placeholder, disabled, mass, value, onChange } = props
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
      <InputStyled
        appearance={appearance}
        type={kind}
        placeholder={placeholder}
        disabled={disabled}
        mass={mass}
        value={value}
        onChange={onChange}
      />
    </InputGroupStyled>
  )
}

Input.defaultProps = {
  kind: 'text',
  appearance: 'basic',
  placeholder: '',
  disabled: false,
  mass: 'medium',
  value: '',
}
