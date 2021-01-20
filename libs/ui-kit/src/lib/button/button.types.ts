export type ButtonSize = 'giant' | 'large' | 'medium' | 'small' | 'tiny'
export type ButtonColor = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type ButtonAppearance = 'filled' | 'outline' | 'ghost'

export type ButtonProps = {
  size?: ButtonSize,
  appearance?: ButtonAppearance,
  color?: ButtonColor,
}
