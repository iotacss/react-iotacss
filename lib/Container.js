import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Base from './Base'


const Container = ({
  gutter,
  size,
  children,
  ...props
}) => {
  const containerClasses = classnames('o-container', {
    [`o-container--${gutter}`]: gutter,
    [`o-container--${size}`]: size
  })

  return (
    <Base className={containerClasses} {...props}>
      {children}
    </Base>
  )
}


Container.propTypes = {
  gutter: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node
}


export default Container
