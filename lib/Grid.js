import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Base from './Base'
import GridColumn from './GridColumn'


const VALIGN_OPTIONS = [
  'right',
  'center',
  'top',
  'middle',
  'bottom',
  'around',
  'between'
]


const Grid = ({
  gutter,
  align,
  rev,
  equalHeight,
  children,
  ...props
}) => {
  const gridClasses = classnames('o-grid', {
    [`o-grid--${gutter}`]: gutter,
    [`o-grid--${align}`]: align,
    'o-grid--rev': rev,
    'o-grid--equal-height': equalHeight
  })

  return (
    <Base className={gridClasses} {...props}>
      {children}
    </Base>
  )
}


Grid.propTypes = {
  gutter: PropTypes.string,
  align: PropTypes.oneOf(VALIGN_OPTIONS),
  rev: PropTypes.bool,
  equalHeight: PropTypes.bool,
  children: PropTypes.node
}


Grid.Column = GridColumn


export default Grid
