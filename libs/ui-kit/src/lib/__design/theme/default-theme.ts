import { rem, transparentize } from 'polished'
import { ThemeObject } from './theme.types'
import { Colors } from '../settings'

export const defaultTheme: ThemeObject = {
  'font-family-primary': 'Open Sans, sans-serif',
  'font-weight-bold': 700,
  'font-weight-semi-bold': 600,
  'font-weight-regular': 400,
  'font-weight-light': 300,

  'font-size-caption': rem(12),
  'font-size-label': rem(12),
  'font-size-p1': rem(15),
  'font-size-subtitle-s2': rem(13),

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

  'button-filled-basic-hover-background': Colors.Basic200,
  'button-filled-primary-hover-background': Colors.Primary400,
  'button-filled-success-hover-background': Colors.Success400,
  'button-filled-info-hover-background': Colors.Info400,
  'button-filled-warning-hover-background': Colors.Warning400,
  'button-filled-danger-hover-background': Colors.Danger400,

  'button-filled-basic-focus-background': Colors.Basic400,
  'button-filled-primary-focus-background': Colors.Primary600,
  'button-filled-success-focus-background': Colors.Success600,
  'button-filled-info-focus-background': Colors.Info600,
  'button-filled-warning-focus-background': Colors.Warning600,
  'button-filled-danger-focus-background': Colors.Danger600,

  'button-filled-basic-focus-border': Colors.Basic500,
  'button-filled-primary-focus-border': Colors.Basic700,
  'button-filled-success-focus-border': Colors.Success700,
  'button-filled-info-focus-border': Colors.Info700,
  'button-filled-warning-focus-border': Colors.Warning700,
  'button-filled-danger-focus-border': Colors.Danger700,

  'button-filled-basic-color': Colors.Basic800,
  'button-filled-colorized-color': Colors.Basic100,

  'button-filled-focus-shadow': `0 0 0 ${rem(6)} ${transparentize(0.84, Colors.Basic600)}`,

  'button-outline-basic-background': transparentize(0.92, Colors.Basic600),
  'button-outline-primary-background': transparentize(0.92, Colors.Primary500),
  'button-outline-success-background': transparentize(0.92, Colors.Success500),
  'button-outline-info-background': transparentize(0.92, Colors.Info500),
  'button-outline-warning-background': transparentize(0.92, Colors.Warning500),
  'button-outline-danger-background': transparentize(0.92, Colors.Danger500),

  'button-outline-basic-hover-background': transparentize(0.84, Colors.Basic600),
  'button-outline-primary-hover-background': transparentize(0.84, Colors.Primary500),
  'button-outline-success-hover-background': transparentize(0.84, Colors.Success500),
  'button-outline-info-hover-background': transparentize(0.84, Colors.Info500),
  'button-outline-warning-hover-background': transparentize(0.84, Colors.Warning500),
  'button-outline-danger-hover-background': transparentize(0.84, Colors.Danger500),

  'button-outline-basic-focus-background': transparentize(0.76, Colors.Basic600),
  'button-outline-primary-focus-background': transparentize(0.76, Colors.Primary600),
  'button-outline-success-focus-background': transparentize(0.76, Colors.Success600),
  'button-outline-info-focus-background': transparentize(0.76, Colors.Info600),
  'button-outline-warning-focus-background': transparentize(0.76, Colors.Warning600),
  'button-outline-danger-focus-background': transparentize(0.76, Colors.Danger600),

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

  'button-outline-focus-shadow': `0 0 0 ${rem(6)} ${transparentize(0.84, Colors.Basic600)}, inset 0 0 0 100vmax ${transparentize(0.84, Colors.Basic600)}`,

  'button-ghost-background': transparentize(1, Colors.Basic100),

  'button-ghost-basic-color': Colors.Basic800,
  'button-ghost-primary-color': Colors.Primary500,
  'button-ghost-success-color': Colors.Success500,
  'button-ghost-info-color': Colors.Info500,
  'button-ghost-warning-color': Colors.Warning500,
  'button-ghost-danger-color': Colors.Danger500,

  'button-ghost-hover-background': transparentize(0.84, Colors.Basic600),
  'button-ghost-focus-background': transparentize(0.84, Colors.Basic600),

  'button-ghost-focus-shadow': `0 0 0 ${rem(6)} ${transparentize(0.84, Colors.Basic600)}, inset 0 0 0 100vmax ${transparentize(0.84, Colors.Basic600)}`,

  'button-radius': rem(4),
  'input-radius': rem(4),

  'input-label-color': Colors.Basic600,
  'input-background': Colors.Basic200,
  'input-placeholder-color': Colors.Basic600,
  'input-line-height': rem(24),

  'input-basic-color': Colors.Basic800,

  'input-basic-border-color': Colors.Basic400,
  'input-info-border-color': Colors.Info500,
  'input-success-border-color': Colors.Success500,
  'input-warning-border-color': Colors.Warning500,
  'input-danger-border-color': Colors.Danger500,
  'input-primary-border-color': Colors.Primary500,

  'input-info-hover-border-color': Colors.Info400,
  'input-success-hover-border-color': Colors.Success400,
  'input-warning-hover-border-color': Colors.Warning400,
  'input-danger-hover-border-color': Colors.Danger400,
  'input-primary-hover-border-color': Colors.Primary400,

  'input-info-focus-border-color': Colors.Info700,
  'input-success-focus-border-color': Colors.Success700,
  'input-warning-focus-border-color': Colors.Warning700,
  'input-danger-focus-border-color': Colors.Danger700,
  'input-primary-focus-border-color': Colors.Primary700,

  'input-horizontal-padding': rem(16),
  'input-small-vertical-padding': rem(3),
  'input-medium-vertical-padding': rem(7),
  'input-large-vertical-padding': rem(11),

  'input-hover-background': Colors.Basic300,
  'input-hover-border-color': Colors.Basic400,

  'input-focus-border-color': Colors.Primary500,
  'input-focus-background': Colors.Basic100,

  'input-disabled-color': transparentize(0.52, Colors.Basic600),

  'input-icon-basic-color': Colors.Basic600,
  'input-icon-primary-color': Colors.Primary500,
  'input-icon-info-color': Colors.Info500,
  'input-icon-success-color': Colors.Success500,
  'input-icon-warning-color': Colors.Warning500,
  'input-icon-danger-color': Colors.Danger500,

  'input-caption-basic-color': Colors.Basic600,
  'input-caption-primary-color': Colors.Primary500,
  'input-caption-info-color': Colors.Info500,
  'input-caption-success-color': Colors.Success500,
  'input-caption-warning-color': Colors.Warning500,
  'input-caption-danger-color': Colors.Danger500,

  'input-icon-size': rem(24),

  'checkbox-color': Colors.Basic800,
  'checkbox-focus-outline-color': transparentize(0.84, Colors.Basic600),
  'checkbox-checkmark-color': Colors.Basic100,

  'checkbox-basic-background': transparentize(0.84, Colors.Basic600),
  'checkbox-basic-border-color': Colors.Basic500,
  'checkbox-basic-select-background': Colors.Primary500,
  'checkbox-basic-hover-select-background': Colors.Primary400,

  'checkbox-basic-hover-background': transparentize(0.84, Colors.Primary500),
  'checkbox-basic-hover-border-color': Colors.Primary500,

  'checkbox-basic-focus-background': transparentize(0.6, Colors.Basic600),
  'checkbox-basic-focus-border-color': Colors.Basic600,
  'checkbox-basic-focus-select-border-color': Colors.Primary700,

  'checkbox-disabled-background': transparentize(0.92, Colors.Basic600),
  'checkbox-disabled-border-color': transparentize(0.52, Colors.Basic600),
  'checkbox-disabled-select-background': transparentize(0.52, Colors.Basic500),
  'checkbox-disabled-select-border-color': transparentize(0.52, Colors.Basic500),

  'checkbox-primary-background': transparentize(0.84, Colors.Primary500),
  'checkbox-primary-border-color': Colors.Primary500,
  'checkbox-primary-select-background': Colors.Primary500,
  'checkbox-primary-hover-select-background': Colors.Primary500,

  'checkbox-primary-hover-background': transparentize(0.84, Colors.Primary500),
  'checkbox-primary-hover-border-color': Colors.Primary500,

  'checkbox-primary-focus-background': transparentize(0.84, Colors.Primary500),
  'checkbox-primary-focus-border-color': Colors.Primary700,
  'checkbox-primary-focus-select-border-color': Colors.Primary700,

  'checkbox-info-background': transparentize(0.84, Colors.Info500),
  'checkbox-info-border-color': Colors.Info500,
  'checkbox-info-select-background': Colors.Info500,
  'checkbox-info-hover-select-background': Colors.Info500,

  'checkbox-info-hover-background': transparentize(0.84, Colors.Info500),
  'checkbox-info-hover-border-color': Colors.Info500,

  'checkbox-info-focus-background': transparentize(0.84, Colors.Info500),
  'checkbox-info-focus-border-color': Colors.Info700,
  'checkbox-info-focus-select-border-color': Colors.Info700,

  'checkbox-success-background': transparentize(0.84, Colors.Success500),
  'checkbox-success-border-color': Colors.Success500,
  'checkbox-success-select-background': Colors.Success500,
  'checkbox-success-hover-select-background': Colors.Success500,

  'checkbox-success-hover-background': transparentize(0.84, Colors.Success500),
  'checkbox-success-hover-border-color': Colors.Success500,

  'checkbox-success-focus-background': transparentize(0.84, Colors.Success500),
  'checkbox-success-focus-border-color': Colors.Success700,
  'checkbox-success-focus-select-border-color': Colors.Success700,

  'checkbox-warning-background': transparentize(0.84, Colors.Warning500),
  'checkbox-warning-border-color': Colors.Warning500,
  'checkbox-warning-select-background': Colors.Warning500,
  'checkbox-warning-hover-select-background': Colors.Warning500,

  'checkbox-warning-hover-background': transparentize(0.84, Colors.Warning500),
  'checkbox-warning-hover-border-color': Colors.Warning500,

  'checkbox-warning-focus-background': transparentize(0.84, Colors.Warning500),
  'checkbox-warning-focus-border-color': Colors.Warning700,
  'checkbox-warning-focus-select-border-color': Colors.Warning700,

  'checkbox-danger-background': transparentize(0.84, Colors.Danger500),
  'checkbox-danger-border-color': Colors.Danger500,
  'checkbox-danger-select-background': Colors.Danger500,
  'checkbox-danger-hover-select-background': Colors.Danger500,

  'checkbox-danger-hover-background': transparentize(0.84, Colors.Danger500),
  'checkbox-danger-hover-border-color': Colors.Danger500,

  'checkbox-danger-focus-background': transparentize(0.84, Colors.Danger500),
  'checkbox-danger-focus-border-color': Colors.Danger700,
  'checkbox-danger-focus-select-border-color': Colors.Danger700,
}
