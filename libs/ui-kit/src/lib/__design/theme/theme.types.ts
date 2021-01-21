import { Colors } from '../settings'

export interface ThemeObject {
  /**
   * Fonts
   */
  'font-family-primary': string;
  'font-weight-bold': number;

  /**
   * Buttons
   */

  /**
   * General
   */
  'button-giant-line-height': string;
  'button-large-line-height': string;
  'button-medium-line-height': string;
  'button-small-line-height': string;
  'button-tiny-line-height': string;

  /**
   * Paddings
   */
  'button-giant-padding': string;
  'button-large-padding': string;
  'button-medium-padding': string;
  'button-small-padding': string;
  'button-tiny-padding': string;

  /**
   * Font Size
   */
  'button-giant-font-size': string;
  'button-large-font-size': string;
  'button-medium-font-size': string;
  'button-small-font-size': string;
  'button-tiny-font-size': string;

  /**
   * Shape
   */
  'button-radius': string;

  /**
   * Filled
   */

  /**
   * Backgrounds
   */
  'button-filled-basic-background': Colors;
  'button-filled-primary-background': Colors;
  'button-filled-success-background': Colors;
  'button-filled-info-background': Colors;
  'button-filled-warning-background': Colors;
  'button-filled-danger-background': Colors;

  /**
   * Hover
   */
  'button-filled-basic-hover-background': Colors;
  'button-filled-primary-hover-background': Colors;
  'button-filled-success-hover-background': Colors;
  'button-filled-info-hover-background': Colors;
  'button-filled-warning-hover-background': Colors;
  'button-filled-danger-hover-background': Colors;

  /**
   * Colors
   */
  'button-filled-basic-color': Colors;
  'button-filled-colorized-color': Colors;

  /**
   * Button Outline
   */

  /**
   * Backgrounds
   */
  'button-outline-basic-background': string;
  'button-outline-primary-background': string;
  'button-outline-success-background': string;
  'button-outline-info-background': string;
  'button-outline-warning-background': string;
  'button-outline-danger-background': string;

  /**
   * Hover
   */
  'button-outline-basic-hover-background': string;
  'button-outline-primary-hover-background': string;
  'button-outline-success-hover-background': string;
  'button-outline-info-hover-background': string;
  'button-outline-warning-hover-background': string;
  'button-outline-danger-hover-background': string;

  /**
   * Borders
   */
  'button-outline-basic-border': Colors;
  'button-outline-primary-border': Colors;
  'button-outline-success-border': Colors;
  'button-outline-info-border': Colors;
  'button-outline-warning-border': Colors;
  'button-outline-danger-border': Colors;

  /**
   * Colors
   */
  'button-outline-basic-color': Colors;
  'button-outline-primary-color': Colors;
  'button-outline-success-color': Colors;
  'button-outline-info-color': Colors;
  'button-outline-warning-color': Colors;
  'button-outline-danger-color': Colors;

  /**
   * Button Ghost
   */

  /**
   * Backgrounds
   */
  'button-ghost-background': string;

  /**
   * Colors
   */
  'button-ghost-basic-color': Colors;
  'button-ghost-primary-color': Colors;
  'button-ghost-success-color': Colors;
  'button-ghost-info-color': Colors;
  'button-ghost-warning-color': Colors;
  'button-ghost-danger-color': Colors;

  /**
   * Hover
   */
  'button-ghost-hover-background': string;
}
