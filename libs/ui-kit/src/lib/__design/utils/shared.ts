import { css, FlattenSimpleInterpolation } from 'styled-components'

export function propertyAnimation(properties: string[], duration = 0.15): FlattenSimpleInterpolation {
  return css`
    transition-duration: ${duration}s;
    transition-property: ${properties.join(' ')};
    transition-timing-function: ease-in;
  `
}

export function visuallyHidden(): FlattenSimpleInterpolation {
  return css`
    border: none;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `
}
