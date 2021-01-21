import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { ButtonProps } from './button.types'
import { propertyAnimation } from '../__design/utils'

const filled = css<ButtonProps>`

  ${({ theme, status }) => {
    const textColor = status === 'basic' ? theme['button-filled-basic-color'] : theme['button-filled-colorized-color']

    return css`
      --background-color: ${theme[`button-filled-${status}-background`]};
      --border-color: ${theme[`button-filled-${status}-background`]};

      color: ${textColor};
      background-color: var(--background-color);
      border: ${rem(1)} solid var(--border-color);

      &:hover {
        --background-color: ${theme[`button-filled-${status}-hover-background`]};
        --border-color: ${theme[`button-filled-${status}-hover-background`]};
      }

      &:focus,
      &:active {
        --background-color: ${theme[`button-filled-${status}-focus-background`]};
        --border-color: ${theme[`button-filled-${status}-focus-background`]};
      }

      &:focus {
        --border-color: ${theme[`button-filled-${status}-focus-border`]};
      }
  `}
}`

const outline = css<ButtonProps>`
  ${({ theme, status }) => css`
    --background-color: ${theme[`button-outline-${status}-background`]};

    border: 1px solid ${theme[`button-outline-${status}-border`]};
    color: ${theme[`button-outline-${status}-color`]};
    background-color: var(--background-color);

    &:hover {
      --background-color: ${theme[`button-outline-${status}-hover-background`]};
    }

    &:focus,
    &:active {
      --background-color: ${theme[`button-outline-${status}-focus-background`]};
    }
  `}
`

const ghost = css<ButtonProps>`
  ${({ theme, status }) => css`
    color: ${theme[`button-ghost-${status}-color`]};
    background-color: ${theme['button-ghost-background']};
    border: ${rem(1)} solid ${theme['button-ghost-background']};

    &:hover {
      background-color: ${theme['button-ghost-hover-background']};
    }

    &:focus,
    &:active {
      background-color: ${theme['button-ghost-focus-background']};
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

    ${propertyAnimation(['background-color', 'border-color'])}

    &:focus {
      outline: none;
    }

    ${appearances[appearance]}
  `}
`

export const ButtonStyled = styled.button<ButtonProps>`
  ${ButtonStyle}
`
