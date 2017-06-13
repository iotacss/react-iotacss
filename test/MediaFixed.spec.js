import React from 'react';
import { shallow } from 'enzyme';

import { Media } from '../lib'

describe('Media.Fixed', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Media.Fixed>
        <div />
      </Media.Fixed>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Media.Fixed />)

    expect(wrapper.hasClass('o-media__fixed')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Media.Fixed className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

})
