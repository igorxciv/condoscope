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
