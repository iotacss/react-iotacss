import React from 'react';
import { shallow } from 'enzyme';

import { Media } from '../lib'

describe('Media.Fluid', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Media.Fluid>
        <div />
      </Media.Fluid>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Media.Fluid />)

    expect(wrapper.hasClass('o-media__fluid')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Media.Fluid className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

})
