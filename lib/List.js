import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Base from './Base'
import ListItem from './ListItem'


const VALIGN_OPTIONS = [
  'top',
  'middle',
  'bottom'
]

const TYPE_OPTIONS = [
  'inline',
  'block',
  'span'
]


const List = ({
  type,
  gutter,
  align,
  tagName,
  children,
  ...props
}) => {
  const classes = classnames('o-list', {
    [`o-list--${type}`]: type,
    [`o-list--${gutter}`]: gutter,
    [`o-list--${align}`]: align
  })

  return (
    <Base tagName={tagName} className={classes} {...props}>
      {children}
    </Base>
  )
}


List.defaultProps = {
  type: 'inline',
  tagName: 'ul'
}


List.propTypes = {
  type: PropTypes.string,
  gutter: PropTypes.string,
  align: PropTypes.oneOf(VALIGN_OPTIONS),
  tagName: PropTypes.oneOf(['ul', 'ol']),
  children: PropTypes.node
}


List.Item = ListItem


export default List
