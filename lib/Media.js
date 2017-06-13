import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Base from './Base'
import MediaFixed from './MediaFixed'
import MediaFluid from './MediaFluid'


const VALIGN_OPTIONS = [
  'top',
  'middle',
  'bottom'
]


const Media = ({
  gutter,
  align,
  rev,
  children,
  ...props
}) => {
  const mediaClasses = classnames('o-media', {
    [`o-media--${gutter}`]: gutter,
    [`o-media--${align}`]: align,
    'o-media--rev': rev
  })

  return (
    <Base tagName="div" className={mediaClasses} {...props}>
      {children}
    </Base>
  )
}


Media.propTypes = {
  gutter: PropTypes.string,
  align: PropTypes.oneOf(VALIGN_OPTIONS),
  rev: PropTypes.bool,
  children: PropTypes.node
}


Media.Fixed = MediaFixed
Media.Fluid = MediaFluid


export default Media
