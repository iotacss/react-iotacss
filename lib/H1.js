import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Type from './Type'


const H1 = ({
  size,
  children,
  className,
  ...props
}) => {
  const typeClasses = classnames(className, {
    [`o-type-${size}`]: size
  })

  return (
    <Type tagName="h1" className={typeClasses} {...props}>
      {children}
    </Type>
  )
}


H1.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}


export default H1
