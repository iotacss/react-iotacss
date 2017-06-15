import utilities from './utilsList'

export default (props) => {
  let className = ''
  const classNames = []
  const propKeys = Object.keys(props)
  
  propKeys.forEach(propKey => {
    const utilityKey = propKey.substr(1).toLowerCase()
    const utilityValue = props[propKey] === true ? '' : props[propKey]
    const utility = utilities.find(util => { return util.name.toLowerCase() === utilityKey })

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
