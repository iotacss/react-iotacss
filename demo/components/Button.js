import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  Base
} from '../../src'


import './Button.scss'


const Button = ({
  className,
  children,
  type,
  ...props
}) => {
  const buttonClasses = classnames('c-button', className, {
    [`c-button--${type}`]: type
  })

  return (
    <Base tagName="button" className={buttonClasses} {...props}>
      {children}
    </Base>
  )
}


Button.propTypes = {
  type: PropTypes.oneOf(['outline']),
  children: PropTypes.node
}


export default Button
