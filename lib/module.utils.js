const moduleOptions = `<%= JSON.stringify(options) %>`
const logStyle = 'background: linear-gradient(60deg, #C40C65, #114E8D); padding: 2px 5px; border-radius: 5px; font-weight: bold; color: #fff;'

export function log(...args) {
  const options = JSON.parse(moduleOptions)
  // eslint-disable-next-line no-console
  console.log('%c' + options.nameShort, logStyle, ...args)
}

function trackingIdExists() {
  const cookies = document.cookie.split(';')
  const trackingId = cookies.find(cookie => cookie.includes('helloRetailTrackingUserId'))
  return trackingId !== undefined
}

function cookieConsent() {
  if (!trackingIdExists()) {
    const cookies = document.cookie.split(';')
    const consentCookie = cookies.find(cookie => cookie.includes('ralph-cookie-consent'))
    if (consentCookie !== undefined) {
      return consentCookie.split('=')[1] === 'true'
    } else {
      return false
    }
  }
}

export function optInUser(callback) {
  if (typeof window !== 'undefined' && cookieConsent()) {
    const hrq = window.hrq || []
    log('Opting in user')
    hrq.push(['setTrackingOptOut', false])
    if (typeof callback === 'function') {
      callback()
    }
  }
}

export function getTrackingUserId() {
  if (typeof window !== 'undefined') {
    const hrq = window.hrq || []
    hrq.push(['getTrackingUserId', (trackingId) => {
      document.cookie = "helloRetailTrackingUserId=" + trackingId + ";path=/";
      log('Hello Retail Tracking User ID', trackingId)
    }])
  }
}

export function helloRetail(action, payload) {
  if (typeof window !== 'undefined') {
    const hrq = window.hrq || []
    hrq.push([action, payload])
  }
}
