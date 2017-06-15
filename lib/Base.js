import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import propsToUtilClasses from './utils/propsToUtilClasses'


class Base extends Component {

  static propTypes = {
    /** HTML element string or React component to render */
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element
    ]),
    /** Applies extra classes to component */
    className: PropTypes.string,
    /** HTML element or React component to render */
    children: PropTypes.node,

    /** Applies vertical align using align utility */
    uAlign: PropTypes.oneOf(['top', 'bottom', 'middle', 'baseline']),
    /** Applies background color value using bgcolor utility */
    uBgcolor: PropTypes.string,
    /** Applies clearfix using clearfix utility */
    uClearfix: PropTypes.bool,
    /** Applies color value using color utility */
    uColor: PropTypes.string,
    /** Applies display type using display utility */
    uDisplay: PropTypes.oneOf(['block', 'inline', 'inline-block', 'hidden']),
    /** Applies float direction using float utility */
    uFloat: PropTypes.oneOf(['left', 'right']),
    /** Applies margin top using margin utility */
    uMt: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin right using margin utility */
    uMr: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin bottom using margin utility */
    uMb: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin left using margin utility */
    uMl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies vertical margin using margin utility */
    uMv: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies horizontal margin using margin utility */
    uMh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies opacity size using opacity utility */
    uOpacity: PropTypes.string,
    /** Applies padding top using margin utility */
    uPt: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding right using margin utility */
    uPr: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding bottom using margin utility */
    uPb: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding left using margin utility */
    uPl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies vertical padding using margin utility */
    uPv: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies horizontal padding using margin utility */
    uPh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies position type using position utility */
    uPosition: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static']),
    /** Applies after offset using pull utility */
    uPull: PropTypes.string,
    /** Applies offset using push utility */
    uPush: PropTypes.string,
    /** Applies width size using size utility */
    uSize: PropTypes.string,
    /** Applies text alignment using text utility */
    uText: PropTypes.oneOf(['left', 'right', 'center']),
    /** Applies text transform using transform utility */
    uTransform: PropTypes.oneOf(['capitalize', 'uppercase', 'lowercase']),
    /** Applies font weight size using weight utility */
    uWeight: PropTypes.string
  }

  render() {
    const {
      tagName,
      children,
      className,
      ...props
    } = this.props

    const Component = tagName || 'div'

    const componentClassName = classnames(className,
      propsToUtilClasses(this.props)
    )

    return (
      <Component className={componentClassName}>
        {children}
      </Component>
    )
  }

}


export default Base
