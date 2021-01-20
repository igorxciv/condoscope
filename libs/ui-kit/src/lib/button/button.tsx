import React, { FC, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { ThemeKey } from 'theme/theme.types'
import type { ButtonProps } from './button.types'

const filled = css<ButtonProps>`
  text-transform: uppercase;

  ${({ theme, color }) => {
    const textColor = color === 'basic' ? theme['button-filled-basic-color'] : theme['button-filled-colorized-color'] as ThemeKey

    return css`
      background: ${theme[`button-filled-${color}-background`] as ThemeKey};
      color: ${textColor};
    `}}
`

const outline = css<ButtonProps>``

const ghost = css<ButtonProps>``

const appearances = { filled, outline, ghost }

const ButtonStyled = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;

  ${({ theme, size, appearance }) => css`
    padding: ${theme[`button-${size}-padding`]};
    line-height: ${theme[`button-${size}-line-height`] as ThemeKey};

    font-size: ${theme[`button-${size}-font-size`] as ThemeKey};
    font-family: ${theme['font-family-primary'] as ThemeKey};
    font-weight: ${theme['font-weight-bold'] as ThemeKey};

    ${appearances[appearance]}
  `}
`

export const Button: FC<ButtonProps> = ({
  appearance = 'filled',
  color = 'basic',
  size = 'medium',
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonStyled appearance={appearance} color={color} size={size}>
      {children}
    </ButtonStyled>
  )
}
