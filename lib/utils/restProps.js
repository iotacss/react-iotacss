export default (propTypes = {}, props = {}) => Object.keys(props)
  .filter(prop => !propTypes.hasOwnProperty(prop))
  .reduce((previousValue, currentValue) => (
      Object.assign(previousValue, {
        [currentValue]: props[currentValue]
      })
  ), {});
