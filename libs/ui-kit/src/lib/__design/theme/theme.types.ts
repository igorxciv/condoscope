import { Colors } from '../settings'

export interface ThemeObject {
  /**
   * Fonts
   */
  'font-family-primary': string
  'font-weight-bold': number
  'font-weight-semi-bold': number
  'font-weight-regular': number
  'font-weight-light': number

  'font-size-caption': string
  'font-size-label': string
  'font-size-p1': string
  'font-size-subtitle-s2': string

  /**
   * Buttons
   */

  /**
   * General
   */
  'button-giant-line-height': string
  'button-large-line-height': string
  'button-medium-line-height': string
  'button-small-line-height': string
  'button-tiny-line-height': string

  /**
   * Paddings
   */
  'button-giant-padding': string
  'button-large-padding': string
  'button-medium-padding': string
  'button-small-padding': string
  'button-tiny-padding': string

  /**
   * Font Size
   */
  'button-giant-font-size': string
  'button-large-font-size': string
  'button-medium-font-size': string
  'button-small-font-size': string
  'button-tiny-font-size': string

  /**
   * Shape
   */
  'button-radius': string

  /**
   * Filled
   */

  /**
   * Backgrounds
   */
  'button-filled-basic-background': Colors
  'button-filled-primary-background': Colors
  'button-filled-success-background': Colors
  'button-filled-info-background': Colors
  'button-filled-warning-background': Colors
  'button-filled-danger-background': Colors

  /**
   * Hover
   */
  'button-filled-basic-hover-background': Colors
  'button-filled-primary-hover-background': Colors
  'button-filled-success-hover-background': Colors
  'button-filled-info-hover-background': Colors
  'button-filled-warning-hover-background': Colors
  'button-filled-danger-hover-background': Colors

  /**
   * Focus
   */
  'button-filled-basic-focus-background': Colors
  'button-filled-primary-focus-background': Colors
  'button-filled-success-focus-background': Colors
  'button-filled-info-focus-background': Colors
  'button-filled-warning-focus-background': Colors
  'button-filled-danger-focus-background': Colors

  'button-filled-basic-focus-border': Colors
  'button-filled-primary-focus-border': Colors
  'button-filled-success-focus-border': Colors
  'button-filled-info-focus-border': Colors
  'button-filled-warning-focus-border': Colors
  'button-filled-danger-focus-border': Colors

  /**
   * Colors
   */
  'button-filled-basic-color': Colors
  'button-filled-colorized-color': Colors

  /**
   * Focus Shadow
   */
  'button-filled-focus-shadow': string

  /**
   * Button Outline
   */

  /**
   * Backgrounds
   */
  'button-outline-basic-background': string
  'button-outline-primary-background': string
  'button-outline-success-background': string
  'button-outline-info-background': string
  'button-outline-warning-background': string
  'button-outline-danger-background': string

  /**
   * Hover
   */
  'button-outline-basic-hover-background': string
  'button-outline-primary-hover-background': string
  'button-outline-success-hover-background': string
  'button-outline-info-hover-background': string
  'button-outline-warning-hover-background': string
  'button-outline-danger-hover-background': string

  /**
   * Focus
   */
  'button-outline-basic-focus-background': string
  'button-outline-primary-focus-background': string
  'button-outline-success-focus-background': string
  'button-outline-info-focus-background': string
  'button-outline-warning-focus-background': string
  'button-outline-danger-focus-background': string

  /**
   * Borders
   */
  'button-outline-basic-border': Colors
  'button-outline-primary-border': Colors
  'button-outline-success-border': Colors
  'button-outline-info-border': Colors
  'button-outline-warning-border': Colors
  'button-outline-danger-border': Colors

  /**
   * Colors
   */
  'button-outline-basic-color': Colors
  'button-outline-primary-color': Colors
  'button-outline-success-color': Colors
  'button-outline-info-color': Colors
  'button-outline-warning-color': Colors
  'button-outline-danger-color': Colors

  /**
   * Focus Shadow
   */
  'button-outline-focus-shadow': string

  /**
   * Button Ghost
   */

  /**
   * Backgrounds
   */
  'button-ghost-background': string

  /**
   * Colors
   */
  'button-ghost-basic-color': Colors
  'button-ghost-primary-color': Colors
  'button-ghost-success-color': Colors
  'button-ghost-info-color': Colors
  'button-ghost-warning-color': Colors
  'button-ghost-danger-color': Colors

  /**
   * Hover
   */
  'button-ghost-hover-background': string

  /**
   * Focus
   */
  'button-ghost-focus-background': string

  /**
   * Focus Shadow
   */
  'button-ghost-focus-shadow': string

  /**
   * Input
   */

  /**
   * General
   */
  'input-label-color': Colors
  'input-background': Colors
  'input-placeholder-color': Colors

  /**
   * Shape
   */
  'input-radius': string

  /**
   * Basic
   */
  'input-basic-border-color': Colors
  'input-basic-color': Colors
  'input-line-height': string

  /**
   * Info
   */
  'input-info-border-color': Colors
  'input-info-hover-border-color': Colors
  'input-info-focus-border-color': Colors

  /**
   * Success
   */
  'input-success-border-color': Colors
  'input-success-hover-border-color': Colors
  'input-success-focus-border-color': Colors

  /**
   * Warning
   */
  'input-warning-border-color': Colors
  'input-warning-hover-border-color': Colors
  'input-warning-focus-border-color': Colors

  /**
   * Danger
   */
  'input-danger-border-color': Colors
  'input-danger-hover-border-color': Colors
  'input-danger-focus-border-color': Colors

  /**
   * Primary
   */
  'input-primary-border-color': Colors
  'input-primary-hover-border-color': Colors
  'input-primary-focus-border-color': Colors

  /**
   * Sizes
   */
  'input-horizontal-padding': string
  'input-icon-size': string

  /**
   * Small
   */
  'input-small-vertical-padding': string

  /**
   * Medium
   */
  'input-medium-vertical-padding': string

  /**
   * Large
   */
  'input-large-vertical-padding': string

  /**
   * Hover
   */
  'input-hover-border-color': Colors
  'input-hover-background': Colors

  /**
   * Focus
   */
  'input-focus-border-color': Colors
  'input-focus-background': Colors

  /**
   * Disabled
   */
  'input-disabled-color': string

  /**
   * Input Icons
   */
  'input-icon-basic-color': Colors
  'input-icon-primary-color': Colors
  'input-icon-info-color': Colors
  'input-icon-success-color': Colors
  'input-icon-warning-color': Colors
  'input-icon-danger-color': Colors

  /**
   * Input Caption
   */
  'input-caption-basic-color': Colors
  'input-caption-primary-color': Colors
  'input-caption-info-color': Colors
  'input-caption-success-color': Colors
  'input-caption-warning-color': Colors
  'input-caption-danger-color': Colors

  /**
   * Checkbox
   */
  /**
   * Basic
   */
  'checkbox-color': Colors
  'checkbox-focus-outline-color': string
  'checkbox-checkmark-color': Colors

  'checkbox-basic-background': string
  'checkbox-basic-border-color': Colors
  'checkbox-basic-select-background': Colors
  'checkbox-basic-hover-select-background': Colors

  'checkbox-basic-hover-background': string
  'checkbox-basic-hover-border-color': Colors

  'checkbox-basic-focus-background': string
  'checkbox-basic-focus-border-color': Colors
  'checkbox-basic-focus-select-border-color': Colors

  'checkbox-disabled-background': string
  'checkbox-disabled-border-color': string
  'checkbox-disabled-select-background': string
  'checkbox-disabled-select-border-color': string

  'checkbox-primary-background': string
  'checkbox-primary-border-color': Colors
  'checkbox-primary-select-background': Colors
  'checkbox-primary-hover-select-background': Colors

  'checkbox-primary-hover-background': string
  'checkbox-primary-hover-border-color': Colors

  'checkbox-primary-focus-background': string
  'checkbox-primary-focus-border-color': Colors
  'checkbox-primary-focus-select-border-color': Colors

  'checkbox-info-background': string
  'checkbox-info-border-color': Colors
  'checkbox-info-select-background': Colors
  'checkbox-info-hover-select-background': Colors

  'checkbox-info-hover-background': string
  'checkbox-info-hover-border-color': Colors

  'checkbox-info-focus-background': string
  'checkbox-info-focus-border-color': Colors
  'checkbox-info-focus-select-border-color': Colors

  'checkbox-success-background': string
  'checkbox-success-border-color': Colors
  'checkbox-success-select-background': Colors
  'checkbox-success-hover-select-background': Colors

  'checkbox-success-hover-background': string
  'checkbox-success-hover-border-color': Colors

  'checkbox-success-focus-background': string
  'checkbox-success-focus-border-color': Colors
  'checkbox-success-focus-select-border-color': Colors

  'checkbox-warning-background': string
  'checkbox-warning-border-color': Colors
  'checkbox-warning-select-background': Colors
  'checkbox-warning-hover-select-background': Colors

  'checkbox-warning-hover-background': string
  'checkbox-warning-hover-border-color': Colors

  'checkbox-warning-focus-background': string
  'checkbox-warning-focus-border-color': Colors
  'checkbox-warning-focus-select-border-color': Colors

  'checkbox-danger-background': string
  'checkbox-danger-border-color': Colors
  'checkbox-danger-select-background': Colors
  'checkbox-danger-hover-select-background': Colors

  'checkbox-danger-hover-background': string
  'checkbox-danger-hover-border-color': Colors

  'checkbox-danger-focus-background': string
  'checkbox-danger-focus-border-color': Colors
  'checkbox-danger-focus-select-border-color': Colors
}
