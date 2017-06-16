import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Base from './Base'


const MediaFluid = ({
  children,
  className,
  ...props
}) => {
  const mediaFluidClasses = classnames('o-media__fluid', className)

  return (
    <Base className={mediaFluidClasses} {...props}>
      {children}
    </Base>
  )
}


MediaFluid.propTypes = {
  children: PropTypes.node
}


export default MediaFluid;
