import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Type from './Type'


const P = ({
  size,
  children,
  className,
  ...props
}) => {
  const classes = classnames(className, {
    [`o-type-${size}`]: size
  })

  return (
    <Type className={classes} {...props}>
      {children}
    </Type>
  )
}


P.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}


export default P
