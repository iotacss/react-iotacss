import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Base from './Base'


const Type = ({
  size,
  children,
  className,
  tagName,
  ...props
}) => {
  const classes = classnames(className, {
    [`o-type-${size}`]: size
  })

  return (
    <Base tagName={tagName} className={classes} {...props}>
      {children}
    </Base>
  )
}


Type.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  tagName: PropTypes.string
}


Type.defaultProps = {
  tagName: 'p'
}


export default Type
