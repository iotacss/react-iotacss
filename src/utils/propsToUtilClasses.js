import utilities from './utilsList'

export default (props) => {
  let className = ''
  const propKeys = Object.keys(props)
  
  const classNames = propKeys.map(propKey => {
    const utilityKey = propKey.substr(1).toLowerCase()
    const utilityValue = props[propKey] === true ? '' : props[propKey]
    const utility = utilities.find(util => { return util.name.toLowerCase() === utilityKey })

    if (utility) {
      const utilityValues = typeof utilityValue === 'string' ? utilityValue.split(' ') : [];

      return utilityValues.map(utilityValue => {

        className = 'u'

        if (utility.namespace.length > 0) {
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

        return className
      })

    }
  })

  return classNames
}
