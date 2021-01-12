import React, { FC } from 'react'
import styled from 'styled-components'

/* eslint-disable-next-line */
export interface UiKitProps {}

const StyledUiKit = styled.div`
  color: pink;
`

export const UiKit: FC = () => {
  return (
    <StyledUiKit>
      <h1>
        Welcome to ui-kit!
      </h1>
    </StyledUiKit>
  )
}
