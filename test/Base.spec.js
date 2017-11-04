import React from 'react';
import { shallow } from 'enzyme';

import Base from '../src/Base'

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

    expect(wrapper.is('h1'));
  })

  test('It parses utility properties', () => {
    const wrapper = shallow(<Base uText="center" />)

    expect(wrapper.hasClass('u-text-center')).toBe(true);
  })

  test('It adds extra classes to utility classes', () => {
    const wrapper = shallow(<Base className="test" uText="center" />)

    expect(wrapper.hasClass('u-text-center')).toBe(true);
  })

  test('It accepts falsy non-string values for utility props', () => {
    const wrapper = shallow(<Base uCf={false} />)

    expect(wrapper.hasClass('u-cf')).toBe(false);
  })

  test('It passes down any props that are not specific to Base', () => {
    const wrapper = shallow(<Base title="Hello there" />)
    expect(wrapper.getElement().props.title).toBe('Hello there');
  })

})
