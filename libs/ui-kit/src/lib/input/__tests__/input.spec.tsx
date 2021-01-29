import React from 'react'
import { createRenderer, ShallowRenderer } from 'react-test-renderer/shallow'
import renderer from 'react-test-renderer'
import { Input } from '../input'
import 'jest-styled-components'

describe('Input', () => {
  let shallowRenderer: ShallowRenderer
  let component

  beforeEach(() => {
    shallowRenderer = createRenderer()
    component = shallowRenderer.render(
      <Input>
        Input
      </Input>,
    )
  })

  test('renders successfully', () => {
    expect(component).toMatchSnapshot()
  })

  describe('when no children provided', () => {
    beforeEach(() => {
      component = shallowRenderer.render(<Input />)
    })

    test('renders successfully', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('when has caption', () => {
    beforeEach(() => {
      component = shallowRenderer.render(
        <Input caption="Caption">
          Input
        </Input>,
      )
    })

    test('renders with caption', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('when disabled', () => {
    beforeEach(() => {
      component = shallowRenderer.render(
        <Input disabled>
          Input
        </Input>,
      )
    })

    it('renders successfully', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('when has icon', () => {
    beforeEach(() => {
      component = shallowRenderer.render(
        <Input icon={
          <span>
            icon
          </span>
        }
        >
          Input
        </Input>,
      )
    })

    test('renders successfully', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('full renderer', () => {

    describe('Primary', () => {

      beforeEach(() => {
        component = renderer.create(<Input appearance="primary" />)
      })

      test('renders successfully', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('Info', () => {
      beforeEach(() => {
        component = renderer.create(<Input appearance="info" />)
      })

      test('renders successfully', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('Basic', () => {
      beforeEach(() => {
        component = renderer.create(<Input appearance="basic" />)
      })

      test('renders successfully', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('Success', () => {
      beforeEach(() => {
        component = renderer.create(<Input appearance="success" />)
      })

      test('renders successfully', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('Warning', () => {
      beforeEach(() => {
        component = renderer.create(<Input appearance="warning" />)
      })

      test('renders successfully', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('Danger', () => {
      beforeEach(() => {
        component = renderer.create(<Input appearance="danger" />)
      })

      test('renders successfully', () => {
        expect(component).toMatchSnapshot()
      })
    })
  })
})
