import styled from 'styled-components'
import { visuallyHidden } from '../__design/utils'

export const InputStyled = styled.input``

export const InputGroupStyled = styled.label``

export const InputLabelStyled = styled.span`
  &[aria-hidden="true"] {
    ${visuallyHidden()}
  }
`
