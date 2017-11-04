import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  Base
} from '../../src'


import './Card.scss'


const Card = ({
  className,
  children,
  style,
  ...props
}) => {
  const cardClasses = classnames('c-card', className, {
    [`c-card--${style}`]: style
  })

  return (
    <Base className={cardClasses} {...props}>
      {children}
    </Base>
  )
}


Card.propTypes = {
  style: PropTypes.oneOf(['light']),
  className: PropTypes.string,
  children: PropTypes.node
}


export default Card
