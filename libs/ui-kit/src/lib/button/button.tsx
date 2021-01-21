import React, { FC, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import type { ButtonProps } from './button.types'
import { ThemeKey } from '../theme'

const filled = css<ButtonProps>`
  text-transform: uppercase;

  ${({ theme, status }) => {
    const textColor = status === 'basic' ? theme['button-filled-basic-color'] : theme['button-filled-colorized-color'] as ThemeKey

    return css`
      background-color: ${theme[`button-filled-${status}-background`] as ThemeKey};
      color: ${textColor};

      &:hover {
        background-color: ${theme[`button-filled-${status}-hover-background`] as ThemeKey};
      }
    `}}
`

const outline = css<ButtonProps>``

const ghost = css<ButtonProps>``

const appearances = { filled, outline, ghost }

const ButtonStyled = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;
  transition: background-color 0.15s ease-in;
  cursor: pointer;

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
