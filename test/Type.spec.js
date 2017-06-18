import React from 'react';
import { shallow } from 'enzyme';

import { Type } from '../lib'

describe('Type', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Type>
        <div />
      </Type>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Type size="large" />)

    expect(wrapper.hasClass('o-type-large')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Type size="large" className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It has a tagName property of p by default', () => {
    const wrapper = shallow(<Type size="large" />)

    expect(wrapper.prop('tagName')).toBe('p');
  })

  test('It accepts tagName property', () => {
    const wrapper = shallow(<Type size="large" tagName="h1" />)

    expect(wrapper.prop('tagName')).toBe('h1');
  })

})
