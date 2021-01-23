import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { InputProps } from './input.types'
import { visuallyHidden } from '../__design/utils'

export const InputGroupStyled = styled.label<InputProps>`
  display: flex;
  flex-direction: column;
  row-gap: ${rem(8)};

  ${({ theme }) => css`
    font-family: ${theme['font-family-primary']};
  `}
`

export const InputStyled = styled.input<InputProps>``

export const InputLabelStyled = styled.span<InputProps>`
  text-transform: uppercase;

  &[aria-hidden="true"] {
    ${visuallyHidden()}
  }

  ${({ theme }) => css`
    color: ${theme['input-label-color']};
  `}
`
