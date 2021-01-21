import { rem, transparentize } from 'polished'
import { ThemeObject } from './theme.types'
import { Colors } from '../settings'

export const defaultTheme: ThemeObject = {
  'font-family-primary': 'unquote(\'Open Sans, sans-serif\')',
  'font-weight-bold': 700,

  'button-giant-line-height': rem(24),
  'button-large-line-height': rem(24),
  'button-medium-line-height': rem(20),
  'button-small-line-height': rem(16),
  'button-tiny-line-height': rem(12),

  'button-giant-font-size': rem(18),
  'button-large-font-size': rem(16),
  'button-medium-font-size': rem(14),
  'button-small-font-size': rem(12),
  'button-tiny-font-size': rem(10),

  'button-giant-padding': `${rem(16)} ${rem(24)}`,
  'button-large-padding': `${rem(12)} ${rem(20)}`,
  'button-medium-padding': `${rem(10)} ${rem(18)}`,
  'button-small-padding': `${rem(8)} ${rem(16)}`,
  'button-tiny-padding': `${rem(6)} ${rem(14)}`,

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

  'button-ghost-basic-background': transparentize(1, Colors.Basic100),
  'button-ghost-primary-background': transparentize(1, Colors.Basic100),
  'button-ghost-success-background': transparentize(1, Colors.Basic100),
  'button-ghost-info-background': transparentize(1, Colors.Basic100),
  'button-ghost-warning-background': transparentize(1, Colors.Basic100),
  'button-ghost-danger-background': transparentize(1, Colors.Basic100),

  'button-outline-basic-border': Colors.Basic600,
  'button-outline-primary-border': Colors.Primary500,
  'button-outline-success-border': Colors.Success500,
  'button-outline-info-border': Colors.Info500,
  'button-outline-warning-border': Colors.Warning500,
  'button-outline-danger-border': Colors.Danger500,

  'button-outline-basic-color': Colors.Basic600,
  'button-outline-primary-color': Colors.Primary500,
  'button-outline-success-color': Colors.Success500,
  'button-outline-info-color': Colors.Info500,
  'button-outline-warning-color': Colors.Warning500,
  'button-outline-danger-color': Colors.Danger500,

  'button-filled-basic-hover-background': Colors.Basic200,
  'button-filled-primary-hover-background': Colors.Primary400,
  'button-filled-success-hover-background': Colors.Success400,
  'button-filled-info-hover-background': Colors.Info400,
  'button-filled-warning-hover-background': Colors.Warning400,
  'button-filled-danger-hover-background': Colors.Danger400,

  'button-filled-basic-color': Colors.Basic800,
  'button-filled-colorized-color': Colors.Basic100,

  'button-radius': rem(4),
}
