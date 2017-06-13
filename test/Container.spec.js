import React from 'react';
import { shallow } from 'enzyme';

import { Container } from '../lib'

describe('Container', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Container>
        <div />
      </Container>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Container />)

    expect(wrapper.hasClass('o-container')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Container className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It accepts gutter property', () => {
    const wrapper = shallow(<Container gutter="gutter-large" />)

    expect(wrapper.hasClass('o-container--gutter-large')).toBe(true);
  })

  test('It accepts size property', () => {
    const wrapper = shallow(<Container size="size-large" />)

    expect(wrapper.hasClass('o-container--size-large')).toBe(true);
  })

})
