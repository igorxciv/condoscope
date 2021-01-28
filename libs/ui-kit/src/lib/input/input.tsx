import React, { FC, PropsWithChildren } from 'react'
import { InputGroupStyled, InputStyled, InputLabelStyled, StarIconStyled } from './input.styled'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = (props: PropsWithChildren<InputProps>) => {
  const { children, ...restProps } = props
  const { withStar, kind } = restProps
  const label = children ? (
    <InputLabelStyled>
      {children}
    </InputLabelStyled>
  ) : (
    <InputLabelStyled aria-hidden="true">
      Empty Label
    </InputLabelStyled>
  )
  const starIcon = withStar ? <StarIconStyled {...restProps} /> : null

  return (
    <InputGroupStyled>
      {label}
      <InputStyled
        type={kind}
        {...restProps}
      />
      {starIcon}
    </InputGroupStyled>
  )
}

Input.defaultProps = {
  kind: 'text',
  appearance: 'basic',
  placeholder: '',
  disabled: false,
  mass: 'medium',
}
