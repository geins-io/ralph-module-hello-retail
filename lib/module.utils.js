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
  if (consentCookie) {
    return consentCookie.split('=')[1] === 'true'
  } else {
    return false
  }
}

export const getTrackingUserId = () => {
  if (typeof window !== 'undefined' && cookieConsent()) {
    const hrq = window.hrq || []
    hrq.push(['getTrackingUserId', (trackingId) => {
      document.cookie="helloRetailTrackingUserId=" + trackingId + ";path=/";
      log('Hello Retail Tracking User ID', trackingId)
    }])
  }
}

export const addedToCart = (eventData) => {
  if (typeof window !== 'undefined' && cookieConsent()) {
    const hrq = window.hrq || []
    hrq.push(['setCart', ''])
  }
}

export const viewedProduct = (eventData) => {
  if (typeof window !== 'undefined' && cookieConsent()) {
    const hrq = window.hrq || []
    hrq.push(['trackPageView'])
  }
}

export const setCustomerEmail = (email) => {
  if (typeof window !== 'undefined' && cookieConsent()) {
    const hrq = window.hrq || []
    hrq.push(['setCustomerEmail', email])
  }
}
