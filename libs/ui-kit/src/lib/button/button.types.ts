export type ButtonSize = 'giant' | 'large' | 'medium' | 'small' | 'tiny'
export type ButtonStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type ButtonAppearance = 'filled' | 'outline' | 'ghost'

export type ButtonProps = {
  size?: ButtonSize,
  appearance?: ButtonAppearance,
  status?: ButtonStatus,
}
