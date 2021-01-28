import React, { FC, PropsWithChildren } from 'react'
import { InputGroupStyled, InputLabelStyled, InputHelpTextStyled, InputFieldGroupStyled, InputFieldStyled, InputCaptionStyled } from './input.styled'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = (props: PropsWithChildren<InputProps>) => {
  const { children, ...restProps } = props
  const { inputIcon, kind, caption: captionText } = restProps
  const label = children ? (
    <InputLabelStyled {...restProps}>
      {children}
    </InputLabelStyled>
  ) : (
    <InputLabelStyled aria-hidden="true" {...restProps}>
      Empty Label
    </InputLabelStyled>
  )
  const caption = captionText ? (
    <InputCaptionStyled {...restProps}>
      {captionText}
    </InputCaptionStyled>
  ) : null

  return (
    <InputGroupStyled {...restProps}>
      {label}
      <InputHelpTextStyled {...restProps}>
        Help
      </InputHelpTextStyled>

      <InputFieldGroupStyled {...restProps}>
        <InputFieldStyled type={kind} {...restProps} />
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
