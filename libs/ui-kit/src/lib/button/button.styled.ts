import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'
import { propertyAnimation } from '../__design/utils'

const filled = css<ButtonProps>`
  text-transform: uppercase;

  ${({ theme, status }) => {
    const textColor = status === 'basic' ? theme['button-filled-basic-color'] : theme['button-filled-colorized-color']

    return css`
      background-color: ${theme[`button-filled-${status}-background`]};
      color: ${textColor};

      &:hover {
        background-color: ${theme[`button-filled-${status}-hover-background`]};
      }
    `}}
`

const outline = css<ButtonProps>``

const ghost = css<ButtonProps>``

const appearances = { filled, outline, ghost }

const ButtonStyle = css<ButtonProps>`
  ${({ theme, appearance, size }) => css`
    border-radius: 4px;
    border: none;
    cursor: pointer;

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
