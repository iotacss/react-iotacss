import React from 'react';
import { shallow } from 'enzyme';

import { H3 } from '../lib'

describe('H3', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <H3>Test</H3>
    )

    expect(wrapper.prop('children')).toBe('Test');
  })

  test('It has a class', () => {
    const wrapper = shallow(<H3 size="large" />)

    expect(wrapper.hasClass('o-type-large')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<H3 className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It adds extra classes to base classes', () => {
    const wrapper = shallow(<H3 size="large" className="test" />)

    expect(wrapper.hasClass('o-type-large')).toBe(true);
  })

})
