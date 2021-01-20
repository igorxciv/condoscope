import { DefaultTheme } from 'styled-components'
import { defaultTheme } from './default'

export const themes = {
  default: defaultTheme,
}

export function createTheme(name: keyof typeof themes): DefaultTheme {
  switch (name) {
  default:
    return { name, ...defaultTheme }
  }
}
