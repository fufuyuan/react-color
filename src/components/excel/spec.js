/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import * as color from '../../helpers/color'

import Excel from './Excel'
import ExcelColor from './ExcelColor'
import ExcelGroup from './ExcelGroup'
import { Swatch } from '../common'

test('Excel renders correctly', () => {
  const tree = renderer.create(
    <Excel hex={ color.red.hex } colors={ [['#fff'], ['#333']] } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Excel renders custom styles correctly', () => {
  const tree = renderer.create(
    <Excel hex={ color.red.hex } colors={ [['#fff'], ['#333']] } styles={{ default: { picker: { boxShadow: '0 0 10px red' } } }} />,
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('0 0 10px red')
})

test('Excel onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Excel onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const Excel = tree.find(Swatch)
  Excel.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Excel with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Excel onSwatchHover={ hoverSpy } />,
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const Excel = tree.find(Swatch)
  Excel.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})

test('ExcelColor renders correctly', () => {
  const tree = renderer.create(
    <ExcelColor />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ExcelColor renders with props', () => {
  const tree = renderer.create(
    <ExcelColor active first last />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ExcelGroup renders correctly', () => {
  const tree = renderer.create(
    <ExcelGroup active={ color.red.hex } group={ ['#fff'] } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
