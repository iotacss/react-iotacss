import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Base from './Base'


const ListItem = ({
  children,
  className,
  ...props
}) => {
  const listItemClassName = classnames('o-list__item', className)

  return (
    <Base tagName="li" className={listItemClassName} {...props}>
      {children}
    </Base>
  )
}


ListItem.propTypes = {
  children: PropTypes.node
}


export default ListItem;
