const moduleOptions = `<%= JSON.stringify(options) %>`
const logStyle = 'background: linear-gradient(60deg, #C40C65, #114E8D); padding: 2px 5px; border-radius: 5px; font-weight: bold; color: #fff;'

export function log(...args) {
  const options = JSON.parse(moduleOptions)
  // eslint-disable-next-line no-console
  console.log('%c' + options.nameShort, logStyle, ...args)
}

function cookieConsent() {
  const cookies = document.cookie.split(';')
  const consentCookie = cookies.find(cookie => cookie.includes('ralph-cookie-consent'))
  if (consentCookie !== undefined) {
    return consentCookie.split('=')[1] === 'true'
  } else {
    return false
  }
}

export function beginTracking() {
  if (typeof window !== 'undefined' && cookieConsent()) {
    const hrq = window.hrq || []
    // opt the user in to tracking
    hrq.push(['setTrackingOptOut', false])
  }
}

export function trackEvent(action, param1, param2) {
  if (typeof window !== 'undefined') {
    const hrq = window.hrq || []
    hrq.push([action, param1, param2])
  }
}
