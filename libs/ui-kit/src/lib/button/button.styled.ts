import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'
import { propertyAnimation } from '../__design/utils'

const filled = css<ButtonProps>`

  ${({ theme, status }) => {
    const textColor = status === 'basic' ? theme['button-filled-basic-color'] : theme['button-filled-colorized-color']

    return css`
      color: ${textColor};
      background-color: ${theme[`button-filled-${status}-background`]};

      &:hover {
        background-color: ${theme[`button-filled-${status}-hover-background`]};
      }
  `}
}`

const outline = css<ButtonProps>`
  ${({ theme, status }) => css`
    border: 1px solid ${theme[`button-outline-${status}-border`]};
    color: ${theme[`button-outline-${status}-color`]};
    background-color: ${theme[`button-outline-${status}-background`]};

    &:hover {
      background-color: ${theme[`button-outline-${status}-hover-background`]};
    }
  `}
`

const ghost = css<ButtonProps>`
  ${({ theme, status }) => css`
    color: ${theme[`button-ghost-${status}-color`]};
    background-color: ${theme['button-ghost-background']};

    &:hover {
      background-color: ${theme['button-ghost-hover-background']};
    }
  `}
`

const appearances = { filled, outline, ghost }

const ButtonStyle = css<ButtonProps>`
  ${({ theme, appearance, size }) => css`
    border-radius: ${theme['button-radius']};
    border: none;
    cursor: pointer;
    text-transform: uppercase;

    font-family: ${theme['font-family-primary']};
    font-weight: ${theme['font-weight-bold']};
    font-size: ${theme[`button-${size}-font-size`]};

    padding: ${theme[`button-${size}-padding`]};

    line-height: ${theme[`button-${size}-line-height`]};

    ${propertyAnimation(['background-color'])}

    ${appearances[appearance]}
  `}
`

export const ButtonStyled = styled.button<ButtonProps>`
  ${ButtonStyle}
`
