import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Base from '../../lib/Base'

import './PageSection.scss'


const PageSection = ({
  className,
  children,
  ...props
}) => {
  const pageSectionClasses = classnames('c-page-section', className)

  return (
    <Base className={pageSectionClasses} {...props}>
      {children}
    </Base>
  )
}


PageSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}


export default PageSection
