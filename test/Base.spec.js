import React from 'react';
import { shallow } from 'enzyme';

import Base from '../lib/Base'

describe('Base', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Base>
        <div />
      </Base>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Base className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It accepts tagName property', () => {
    const wrapper = shallow(<Base tagName="h1" />)

    expect(wrapper.is('<h1 />'));
  })

  test('It parses utility properties', () => {
    const wrapper = shallow(<Base uText="center" />)

    expect(wrapper.hasClass('u-text-center')).toBe(true);
  })

})
