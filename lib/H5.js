import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Type from './Type'


const H5 = ({
  size,
  children,
  className,
  ...props
}) => {
  const classes = classnames(className, {
    [`o-type-${size}`]: size
  })

  return (
    <Type tagName="h5" className={classes} {...props}>
      {children}
    </Type>
  )
}


H5.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}


export default H5
