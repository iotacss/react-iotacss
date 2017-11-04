import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Base from './Base'


const GridColumn = ({
  children,
  className,
  ...props
}) => {
  const classes = classnames('o-grid__col', className)

  return (
    <Base className={classes} {...props}>
      {children}
    </Base>
  )
}


GridColumn.propTypes = {
  children: PropTypes.node
}


export default GridColumn;
