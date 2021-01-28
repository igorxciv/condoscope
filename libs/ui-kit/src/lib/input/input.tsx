import React, { FC, PropsWithChildren } from 'react'
import { InputGroupStyled, InputLabelStyled, InputHelpTextStyled, InputFieldGroupStyled, InputFieldStyled, InputCaptionStyled } from './input.styled'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = (props: PropsWithChildren<InputProps>) => {
  const { children, inputIcon, kind, caption: captionText, appearance, mass, disabled } = props
  const label = children ? (
    <InputLabelStyled>
      {children}
    </InputLabelStyled>
  ) : (
    <InputLabelStyled aria-hidden="true">
      Empty Label
    </InputLabelStyled>
  )
  const caption = captionText ? (
    <InputCaptionStyled appearance={appearance}>
      {captionText}
    </InputCaptionStyled>
  ) : null

  return (
    <InputGroupStyled>
      {label}
      <InputHelpTextStyled>
        Help
      </InputHelpTextStyled>

      <InputFieldGroupStyled mass={mass} appearance={appearance} disabled={disabled}>
        <InputFieldStyled type={kind} appearance={appearance} mass={mass} inputIcon={inputIcon} />
        {inputIcon}
      </InputFieldGroupStyled>

      {caption}
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
