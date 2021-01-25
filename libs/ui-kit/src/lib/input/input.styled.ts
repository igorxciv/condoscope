import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { InputProps } from './input.types'
import { propertyAnimation, visuallyHidden } from '../__design/utils'

const basic = css<InputProps>`
  ${({ theme }) => css`
    --border-color: ${theme['input-basic-border-color']};

    &:not(:disabled):hover {
      --border-color: ${theme['input-hover-border-color']};
    }

    &:focus {
      --border-color: ${theme['input-focus-border-color']};
    }
  `}
`

const info = css`
  ${({ theme }) => css`
    --border-color: ${theme['input-info-border-color']};

    &:not(:disabled):hover {
      --border-color: ${theme['input-info-hover-border-color']};
    }

    &:focus {
      --border-color: ${theme['input-info-focus-border-color']};
    }
  `}
`

const primary = css`
  ${({ theme }) => css`
    --border-color: ${theme['input-primary-border-color']};

    &:not(:disabled):hover {
      --border-color: ${theme['input-primary-hover-border-color']};
    }

    &:focus {
      --border-color: ${theme['input-primary-focus-border-color']};
    }
  `}
`

const success = css`
  ${({ theme }) => css`
    --border-color: ${theme['input-success-border-color']};

    &:not(:disabled):hover {
      --border-color: ${theme['input-success-hover-border-color']};
    }

    &:focus {
      --border-color: ${theme['input-success-focus-border-color']};
    }
  `}
`

const warning = css`
  ${({ theme }) => css`
    --border-color: ${theme['input-warning-border-color']};

    &:not(:disabled):hover {
      --border-color: ${theme['input-warning-hover-border-color']};
    }

    &:focus {
      --border-color: ${theme['input-warning-focus-border-color']};
    }
  `}
`

const danger = css`
  ${({ theme }) => css`
    --border-color: ${theme['input-danger-border-color']};

    &:not(:disabled):hover {
      --border-color: ${theme['input-danger-hover-border-color']};
    }

    &:focus {
      --border-color: ${theme['input-danger-focus-border-color']};
    }
  `}
`

const inputAppearances = { basic, info, primary, success, warning, danger }

export const InputGroupStyled = styled.label<InputProps>`
  display: flex;
  flex-direction: column;
  row-gap: ${rem(8)};

  ${({ theme }) => css`
    font-family: ${theme['font-family-primary']};
  `}
`

export const InputStyled = styled.input<InputProps>`
  ${({ theme, appearance, mass }) => css`
    --background-color: ${theme['input-background']};

    border-radius: ${theme['input-radius']};
    border: ${rem(1)} solid var(--border-color);

    line-height: ${theme['input-line-height']};

    font-size: ${theme['input-font-size']};
    font-weight: ${theme['font-weight-semi-bold']};
    color: ${theme['input-basic-color']};
    background-color: var(--background-color);

    padding: ${theme[`input-${mass}-padding`]};

    ${propertyAnimation(['background-color', 'border-color'])}

    &::placeholder {
      color: ${theme['input-placeholder-color']};
      font-weight: ${theme['font-weight-regular']};
      font-family: ${theme['font-family-primary']};
    }

    &:disabled,
    &:disabled::placeholder {
      color: ${theme['input-disabled-color']};
    }

    &:focus {
      --background-color: ${theme['input-focus-background']};
      outline: none;
    }

    &:not(:disabled):hover {
      --background-color: ${theme['input-hover-background']};
    }

    ${inputAppearances[appearance]}
  `}
`

export const InputLabelStyled = styled.span<InputProps>`
  text-transform: uppercase;

  &[aria-hidden="true"] {
    ${visuallyHidden()}
  }

  ${({ theme }) => css`
    color: ${theme['input-label-color']};
    font-weight: ${theme['font-weight-bold']};
  `}
`
