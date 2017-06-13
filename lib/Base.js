import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const UTILITIES = [
  {
    name: 'align',
    namespace: 'align'
  },
  {
    name: 'bgcolor',
    namespace: 'bgcolor'
  },
  {
    name: 'clearfix',
    namespace: 'cf'
  },
  {
    name: 'color',
    namespace: 'color'
  },
  {
    name: 'display',
    namespace: ''
  },
  {
    name: 'float',
    namespace: 'float'
  },
  {
    name: 'mt',
    namespace: 'mt'
  },
  {
    name: 'mr',
    namespace: 'mr'
  },
  {
    name: 'mb',
    namespace: 'mb'
  },
  {
    name: 'ml',
    namespace: 'ml'
  },
  {
    name: 'mv',
    namespace: 'mv'
  },
  {
    name: 'mh',
    namespace: 'mh'
  },
  {
    name: 'opacity',
    namespace: 'opacity'
  },
  {
    name: 'pt',
    namespace: 'pt'
  },
  {
    name: 'pr',
    namespace: 'pr'
  },
  {
    name: 'pb',
    namespace: 'pb'
  },
  {
    name: 'pl',
    namespace: 'pl'
  },
  {
    name: 'pv',
    namespace: 'pv'
  },
  {
    name: 'ph',
    namespace: 'ph'
  },
  {
    name: 'position',
    namespace: ''
  },
  {
    name: 'pull',
    namespace: 'pull'
  },
  {
    name: 'push',
    namespace: 'push'
  },
  {
    name: 'size',
    namespace: ''
  },
  {
    name: 'text',
    namespace: 'text'
  },
  {
    name: 'transform',
    namespace: ''
  },
  {
    name: 'weight',
    namespace: 'weight'
  }
]

const propsToUtilClasses = (props) => {
  let className = ''
  const classNames = []
  const propKeys = Object.keys(props)
  
  propKeys.forEach(propKey => {
    const utilityKey = propKey.substr(1).toLowerCase()
    const utilityValue = props[propKey] === true ? '' : props[propKey]
    const utility = UTILITIES.find(util => { return util.name.toLowerCase() === utilityKey })

    if (utility) {
      const utilityValues = utilityValue.split(" ")

      utilityValues.forEach(utilityValue => {

        className = 'u'

        if (utility.namespace.length) {
          className += `-${utility.namespace}`
        }

        if (utilityValue === 'all') {
          utilityValue = ''
        } else if (utilityValue.startsWith('@')) {
          utilityValue.replace('@', '')
          className += utilityValue
        } else {
          if (utilityValue.length) {
            className += `-${utilityValue}`
          }
        }

        classNames.push(className)
      })

    }
  })

  return classNames
}


class Base extends Component {

  static propTypes = {
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element
    ])
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
