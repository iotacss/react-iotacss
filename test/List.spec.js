import React from 'react';
import { shallow } from 'enzyme';

import { List } from '../lib'

describe('List', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <List>
        <div />
      </List>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<List />)

    expect(wrapper.hasClass('o-list')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<List className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It accepts type property', () => {
    const wrapper = shallow(<List type="span" />)

    expect(wrapper.hasClass('o-list--span')).toBe(true);
  })

  test('It accepts gutter property', () => {
    const wrapper = shallow(<List gutter="large" />)

    expect(wrapper.hasClass('o-list--large')).toBe(true);
  })

  test('It accepts align property', () => {
    const wrapper = shallow(<List align="top" />)

    expect(wrapper.hasClass('o-list--top')).toBe(true);
  })

})
