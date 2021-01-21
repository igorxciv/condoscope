import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'
import { propertyAnimation } from '../__design/utils'

const filled = css<ButtonProps>`
  text-transform: uppercase;

  ${({ theme, status }) => {
    const textColor = status === 'basic' ? theme['button-filled-basic-color'] : theme['button-filled-colorized-color']

    return css`
      color: ${textColor};
  `}
}`

const outline = css<ButtonProps>`
  text-transform: uppercase;

  ${({ theme, status }) => css`
    border: 1px solid ${theme[`button-outline-${status}-border`]};
    color: ${theme[`button-outline-${status}-color`]};
  `}
`

const ghost = css<ButtonProps>`
  ${() => css``}
`

const appearances = { filled, outline, ghost }

const ButtonStyle = css<ButtonProps>`
  ${({ theme, appearance, size, status }) => css`
    border-radius: ${theme['button-radius']};
    border: none;
    cursor: pointer;

    background-color: ${theme[`button-${appearance}-${status}-background`]};

    font-family: ${theme['font-family-primary']};
    font-weight: ${theme['font-weight-bold']};
    font-size: ${theme[`button-${size}-font-size`]};

    padding: ${theme[`button-${size}-padding`]};

    line-height: ${theme[`button-${size}-line-height`]};

    ${propertyAnimation(['background-color'])}

    &:hover {
      background-color: ${theme[`button-${appearance}-${status}-hover-background`]};
    }

    ${appearances[appearance]}
  `}
`

export const ButtonStyled = styled.button<ButtonProps>`
  ${ButtonStyle}
`
