const moduleOptions = `<%= JSON.stringify(options) %>`
const logStyle = 'background: linear-gradient(60deg, #C40C65, #114E8D); padding: 2px 5px; border-radius: 5px; font-weight: bold; color: #fff;'

export function log(...args) {
  const options = JSON.parse(moduleOptions)
  // eslint-disable-next-line no-console
  console.log('%c' + options.nameShort, logStyle, ...args)
}
