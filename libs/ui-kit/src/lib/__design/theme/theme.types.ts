import { Colors } from '../settings'

export interface ThemeObject {
  /**
   * Fonts
   */
  'font-family-primary': string;
  'font-weight-bold': number;

  /**
   * Button Sizes
   */
  'button-giant-line-height': string;
  'button-large-line-height': string;
  'button-medium-line-height': string;
  'button-small-line-height': string;
  'button-tiny-line-height': string;

  /**
   * Button Paddings
   */
  'button-giant-padding': string;
  'button-large-padding': string;
  'button-medium-padding': string;
  'button-small-padding': string;
  'button-tiny-padding': string;

  /**
   * Button Backgrounds
   */
  'button-filled-basic-background': Colors;
  'button-filled-primary-background': Colors;
  'button-filled-success-background': Colors;
  'button-filled-info-background': Colors;
  'button-filled-warning-background': Colors;
  'button-filled-danger-background': Colors;

  'button-outline-basic-background': string;
  'button-outline-primary-background': string;
  'button-outline-success-background': string;
  'button-outline-info-background': string;
  'button-outline-warning-background': string;
  'button-outline-danger-background': string;

  'button-ghost-basic-background': string;
  'button-ghost-primary-background': string;
  'button-ghost-success-background': string;
  'button-ghost-info-background': string;
  'button-ghost-warning-background': string;
  'button-ghost-danger-background': string;

  /**
   * Button Hover
   */
  'button-filled-basic-hover-background': Colors;
  'button-filled-primary-hover-background': Colors;
  'button-filled-success-hover-background': Colors;
  'button-filled-info-hover-background': Colors;
  'button-filled-warning-hover-background': Colors;
  'button-filled-danger-hover-background': Colors;

  /**
   * Button Colors
   */
  'button-filled-basic-color': Colors;
  'button-filled-colorized-color': Colors;

  /**
   * Button Font
   */
  'button-giant-font-size': string;
  'button-large-font-size': string;
  'button-medium-font-size': string;
  'button-small-font-size': string;
  'button-tiny-font-size': string;
}
