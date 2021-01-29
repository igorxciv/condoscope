import React, { FC, PropsWithChildren } from 'react'
import {
  CheckboxCheckmarkBoxStyled,
  CheckboxCheckmarkStyled,
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled,
} from './checkbox.styled'
import { CheckboxProps } from './checkbox.types'

export const Checkbox: FC<CheckboxProps> = (props: PropsWithChildren<CheckboxProps>) => {
  const { children, disabled, checked, appearance } = props
  const checkmark = checked ? <CheckboxCheckmarkStyled /> : null

  return (
    <CheckboxGroupStyled appearance={appearance} disabled={disabled}>
      <CheckboxInputStyled appearance={appearance} disabled={disabled} checked={checked} />
      <CheckboxCheckmarkBoxStyled appearance={appearance}>
        {checkmark}
      </CheckboxCheckmarkBoxStyled>
      <CheckboxLabelStyled>
        {children}
      </CheckboxLabelStyled>
    </CheckboxGroupStyled>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  appearance: 'basic',
}
