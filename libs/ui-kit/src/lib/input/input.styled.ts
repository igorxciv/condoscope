import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { InputProps } from './input.types'
import { propertyAnimation, visuallyHidden } from '../__design/utils'

const inputBasic = css<InputProps>`
  ${({ theme }) => css`
    border: ${rem(1)} solid ${theme['input-basic-border-color']};
  `}
`

const inputAppearances = { basic: inputBasic }

const inputSmall = css`
  ${({ theme }) => css`
    padding: ${theme['input-small-padding']};
  `}
`

const inputMedium = css<InputProps>`
  ${({ theme }) => css`
    padding: ${theme['input-medium-padding']};
  `}
`

const inputLarge = css`
  ${({ theme }) => css`
    padding: ${theme['input-large-padding']};
  `}
`

const inputSizes = { small: inputSmall, medium: inputMedium, large: inputLarge }

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
    background-color: ${theme['input-background']};
    border-radius: ${theme['input-radius']};
    line-height: ${theme['input-line-height']};

    font-size: ${theme['input-font-size']};
    font-weight: ${theme['font-weight-semi-bold']};
    color: ${theme['input-basic-color']};

    ${propertyAnimation(['background-color', 'border-color'])}

    &::placeholder {
      font-weight: ${theme['font-weight-regular']};
      color: ${theme['input-placeholder-color']};
      font-family: ${theme['font-family-primary']};
    }

    &:disabled,
    &:disabled::placeholder {
      color: ${theme['input-disabled-color']};
    }

    &:focus {
      border-color: ${theme['input-focus-border-color']};
      background-color: ${theme['input-focus-background']};
      outline: none;
    }

    &:not(:disabled):hover {
      border-color: ${theme['input-hover-border-color']};
      background-color: ${theme['input-hover-background']};
    }

    ${inputAppearances[appearance]}

    ${inputSizes[mass]}
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
