import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Button } from '../button'
import 'jest-styled-components'

describe('Button', () => {
  let component: ReactTestRenderer

  beforeEach(() => {
    component = renderer.create(
      <Button>
        Button
      </Button>,
    )
  })

  describe('Filled', () => {
    beforeEach(() => {
      component = renderer.create(
        <Button appearance="filled">
          Button
        </Button>,
      )
    })

    it('renders successfully', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('Outline', () => {
    beforeEach(() => {
      component = renderer.create(
        <Button appearance="outline">
          Button
        </Button>,
      )
    })

    it('renders successfully', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('Ghost', () => {
    beforeEach(() => {
      component = renderer.create(
        <Button appearance="ghost">
          Button
        </Button>,
      )
    })

    it('renders successfully', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
