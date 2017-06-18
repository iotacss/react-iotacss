import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Base from './Base'


const MediaFixed = ({
  children,
  className,
  ...props
}) => {
  const classes = classnames('o-media__fixed', className)

  return (
    <Base className={classes} {...props}>
      {children}
    </Base>
  )
}


MediaFixed.propTypes = {
  children: PropTypes.node
}


export default MediaFixed;
