export type InputProps = {
  kind?: 'text' | 'number' | 'email' | 'password'
  // size?: 'small' | 'medium' | 'large'
  appearance?: 'basic' | 'success' | 'info' | 'warning' | 'error'
  placeholder?: string
  disabled?: boolean
}
