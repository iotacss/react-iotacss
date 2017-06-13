import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Type from './Type'


const H3 = ({
  size,
  children,
  className,
  ...props
}) => {
  const typeClasses = classnames(className, {
    [`o-type-${size}`]: size
  })

  return (
    <Type tagName="h3" className={typeClasses} {...props}>
      {children}
    </Type>
  )
}


H3.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}


export default H3
