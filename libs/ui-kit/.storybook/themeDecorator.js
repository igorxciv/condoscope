import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../src/lib/theme'

export const withTheme = storyFn => <ThemeProvider theme={createTheme('default')}>{storyFn()}</ThemeProvider>
