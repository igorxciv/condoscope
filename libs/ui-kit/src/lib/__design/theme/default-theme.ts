import { transparentize } from 'polished'
import { ThemeObject } from './theme.types'
import { Colors } from '../settings'

export const defaultTheme: ThemeObject = {
  'font-family-primary': 'unquote(\'Open Sans, sans-serif\')',
  'font-weight-bold': 700,

  'button-giant-line-height': '24px',
  'button-large-line-height': '24px',
  'button-medium-line-height': '20px',
  'button-small-line-height': '16px',
  'button-tiny-line-height': '12px',

  'button-giant-font-size': '18px',
  'button-large-font-size': '16px',
  'button-medium-font-size': '14px',
  'button-small-font-size': '12px',
  'button-tiny-font-size': '10px',

  'button-giant-padding': '16px',
  'button-large-padding': '12px',
  'button-medium-padding': '10px',
  'button-small-padding': '8px',
  'button-tiny-padding': '6px',

  'button-filled-basic-background': Colors.Basic300,
  'button-filled-primary-background': Colors.Primary500,
  'button-filled-success-background': Colors.Success500,
  'button-filled-info-background': Colors.Info500,
  'button-filled-warning-background': Colors.Warning500,
  'button-filled-danger-background': Colors.Danger500,

  'button-outline-basic-background': transparentize(0.92, Colors.Basic600),
  'button-outline-primary-background': transparentize(0.92, Colors.Primary500),
  'button-outline-success-background': transparentize(0.92, Colors.Success500),
  'button-outline-info-background': transparentize(0.92, Colors.Info500),
  'button-outline-warning-background': transparentize(0.92, Colors.Warning500),
  'button-outline-danger-background': transparentize(0.92, Colors.Danger500),

  'button-filled-basic-hover-background': Colors.Basic200,
  'button-filled-primary-hover-background': Colors.Primary400,
  'button-filled-success-hover-background': Colors.Success400,
  'button-filled-info-hover-background': Colors.Info400,
  'button-filled-warning-hover-background': Colors.Warning400,
  'button-filled-danger-hover-background': Colors.Danger400,

  'button-filled-basic-color': Colors.Basic800,
  'button-filled-colorized-color': Colors.Basic100,
}
