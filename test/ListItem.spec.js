import React from 'react';
import { shallow } from 'enzyme';

import { List } from '../lib'

describe('List.Item', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <List.Item>
        <div />
      </List.Item>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<List.Item />)

    expect(wrapper.hasClass('o-list__item')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<List.Item className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

})
