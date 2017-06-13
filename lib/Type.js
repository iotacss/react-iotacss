import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Base from './Base'


const Type = ({
  size,
  children,
  tagName,
  ...props
}) => {
  const typeClasses = classnames({
    [`o-type-${size}`]: size
  })

  return (
    <Base tagName={tagName || 'p'} className={typeClasses} {...props}>
      {children}
    </Base>
  )
}


Type.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string
}


export default Type
