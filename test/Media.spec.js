import React from 'react';
import { shallow } from 'enzyme';

import { Media } from '../lib'

describe('Media', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Media>
        <div />
      </Media>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Media />)

    expect(wrapper.hasClass('o-media')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Media className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It adds extra classes to base classes', () => {
    const wrapper = shallow(<Media className="test" />)

    expect(wrapper.hasClass('o-media')).toBe(true);
  })

  test('It accepts gutter property', () => {
    const wrapper = shallow(<Media gutter="large" />)

    expect(wrapper.hasClass('o-media--large')).toBe(true);
  })

  test('It accepts align property', () => {
    const wrapper = shallow(<Media align="top" />)

    expect(wrapper.hasClass('o-media--top')).toBe(true);
  })

  test('It accepts rev property', () => {
    const wrapper = shallow(<Media rev />)

    expect(wrapper.hasClass('o-media--rev')).toBe(true);
  })

})
