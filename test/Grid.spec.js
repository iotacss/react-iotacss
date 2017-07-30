import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from '../lib'

describe('Grid', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Grid>
        <div />
      </Grid>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Grid />)

    expect(wrapper.hasClass('o-grid')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Grid className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It adds extra classes to base classes', () => {
    const wrapper = shallow(<Grid className="test" />)

    expect(wrapper.hasClass('o-grid')).toBe(true);
  })

  test('It accepts gutter property', () => {
    const wrapper = shallow(<Grid gutter="large" />)

    expect(wrapper.hasClass('o-grid--large')).toBe(true);
  })

  test('It accepts align property', () => {
    const wrapper = shallow(<Grid align="top" />)

    expect(wrapper.hasClass('o-grid--top')).toBe(true);
  })

  test('It accepts rev property', () => {
    const wrapper = shallow(<Grid rev />)

    expect(wrapper.hasClass('o-grid--rev')).toBe(true);
  })

  test('It accepts equalHeight property', () => {
    const wrapper = shallow(<Grid equalHeight />)

    expect(wrapper.hasClass('o-grid--equal-height')).toBe(true);
  })

})
