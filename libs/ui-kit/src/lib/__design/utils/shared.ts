import { css, FlattenSimpleInterpolation } from 'styled-components'

export function propertyAnimation(properties: string[], duration = 0.15): FlattenSimpleInterpolation {
  return css`
    transition-duration: ${duration}s;
    transition-property: ${properties.join(' ')};
    transition-timing-function: ease-in;
  `
}
