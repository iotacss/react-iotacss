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
  children,
  ...props
}) => {
  const listClasses = classnames('o-list', {
    [`o-list--${type}`]: type,
    [`o-list--${gutter}`]: gutter,
    [`o-list--${align}`]: align
  })

  return (
    <Base tagName="ul" className={listClasses} {...props}>
      {children}
    </Base>
  )
}


List.defaultProps = {
  type: 'inline'
}


List.propTypes = {
  type: PropTypes.string,
  gutter: PropTypes.string,
  align: PropTypes.oneOf(VALIGN_OPTIONS),
  children: PropTypes.node
}


List.Item = ListItem


export default List
