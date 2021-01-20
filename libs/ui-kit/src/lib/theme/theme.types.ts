export type ThemeKey = keyof ThemeObject
export type ThemeKeys = ThemeKey | (string | number)

export interface ThemeObject {
  /**
   * Fonts
   */
  'font-family-primary': ThemeKeys;
  'font-weight-bold': ThemeKeys;

  /**
   * Button Sizes
   */
  'button-giant-line-height': ThemeKeys;
  'button-large-line-height': ThemeKeys;
  'button-medium-line-height': ThemeKeys;
  'button-small-line-height': ThemeKeys;
  'button-tiny-line-height': ThemeKeys;

  /**
   * Button Paddings
   */
  'button-giant-padding': ThemeKeys;
  'button-large-padding': ThemeKeys;
  'button-medium-padding': ThemeKeys;
  'button-small-padding': ThemeKeys;
  'button-tiny-padding': ThemeKeys;

  /**
   * Button Backgrounds
   */
  'button-filled-basic-background': ThemeKeys;
  'button-filled-primary-background': ThemeKeys;
  'button-filled-success-background': ThemeKeys;
  'button-filled-info-background': ThemeKeys;
  'button-filled-warning-background': ThemeKeys;
  'button-filled-danger-background': ThemeKeys;

  /**
   * Button Colors
   */
  'button-filled-basic-color': ThemeKeys;
  'button-filled-colorized-color': ThemeKeys;

  /**
   * Button Font
   */
  'button-giant-font-size': ThemeKeys;
  'button-large-font-size': ThemeKeys;
  'button-medium-font-size': ThemeKeys;
  'button-small-font-size': ThemeKeys;
  'button-tiny-font-size': ThemeKeys;
}
