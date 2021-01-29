import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { CheckboxProps } from './checkbox.types'
import { propertyAnimation, visuallyHidden } from '../__design/utils'
import { CheckmarkIcon } from '../icons'

export const CheckboxGroupStyled = styled.label<Pick<CheckboxProps, 'appearance' | 'disabled'>>`
  ${({ theme, appearance, disabled }) => css`
    display: flex;
    font-family: ${theme['font-family-primary']};
    padding-left: ${rem(26)};
    cursor: pointer;

    &:hover > ${CheckboxCheckmarkBoxStyled} {
      background-color: ${theme[`checkbox-${appearance}-hover-background`]};
      border-color: ${theme[`checkbox-${appearance}-hover-border-color`]};
    }

    &:hover > ${CheckboxInputStyled}:checked:not(:disabled) + ${CheckboxCheckmarkBoxStyled} {
      background-color: ${theme[`checkbox-${appearance}-hover-select-background`]};
      border-color: ${theme[`checkbox-${appearance}-hover-select-background`]};
    }

    ${disabled && css`
      cursor: not-allowed;
    `}
  `}
`

export const CheckboxInputStyled = styled.input.attrs({ type: 'checkbox' })<Pick<CheckboxProps, 'appearance'>>`
  ${({ theme, appearance }) => css`
    ${visuallyHidden()}

    &:checked + ${CheckboxCheckmarkBoxStyled} {
      background-color: ${theme[`checkbox-${appearance}-select-background`]};
      border-color: ${theme[`checkbox-${appearance}-select-background`]};
    }

    &:focus + ${CheckboxCheckmarkBoxStyled} {
      background-color: ${theme[`checkbox-${appearance}-focus-background`]};
      border-color: ${theme[`checkbox-${appearance}-hover-focus-color`]};
      box-shadow: 0 0 0 ${rem(6)} ${theme['checkbox-focus-outline-color']};
    }

    &:focus:checked + ${CheckboxCheckmarkBoxStyled} {
      border-color: ${theme[`checkbox-${appearance}-focus-select-border-color`]};
      background-color: ${theme[`checkbox-${appearance}-select-background`]};
    }

    &:disabled + ${CheckboxCheckmarkBoxStyled} {
      background-color: ${theme['checkbox-disabled-background']};
      border-color: ${theme['checkbox-disabled-border-color']};
    }

    &:disabled:checked + ${CheckboxCheckmarkBoxStyled} {
      background-color: ${theme['checkbox-disabled-select-background']};
      border-color: ${theme['checkbox-disabled-select-border-color']};
    }
  `}
`

export const CheckboxCheckmarkBoxStyled = styled.span<Pick<CheckboxProps, 'appearance'>>`
  ${({ theme, appearance }) => css`
    width: ${rem(20)};
    height: ${rem(20)};
    border: ${rem(1)} solid ${theme[`checkbox-${appearance}-border-color`]};
    background-color: ${theme[`checkbox-${appearance}-background`]};
    position: absolute;
    margin-left: ${rem(-26)};
    border-radius: ${rem(3)};
    box-sizing: border-box;

    ${propertyAnimation(['background-color', 'border-color', 'box-shadow'])}
  `}
`

export const CheckboxCheckmarkStyled = styled(CheckmarkIcon)`
  ${({ theme }) => css`
    color: ${theme['checkbox-checkmark-color']};
    width: ${rem(8)};
    height: ${rem(8)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const CheckboxLabelStyled = styled.span`
  ${({ theme }) => css`
    font-size: ${theme['font-size-subtitle-s2']};
    font-weight: ${theme['font-weight-semi-bold']};
    color: ${theme['checkbox-color']};
    line-height: ${rem(20)};
  `}
`
