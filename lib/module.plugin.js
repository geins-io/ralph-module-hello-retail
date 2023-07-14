import { log, getTrackingUserId, trackEvent } from './ralph-module-hello-retail.utils'
const moduleOptions = `<%= JSON.stringify(options) %>`

export default function(app, inject) {
  const options = JSON.parse(moduleOptions)
  
  // This will make all your module options available through your modules name, for example `this.$ralphModule` in all your components
  inject(options.nameShort, options)

  // Register Vuex store module for this module
  app.store.registerModule(options.name, {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
  })

  // getting the Hello Retail tracking User ID
  getTrackingUserId();

  // Listen to events in ralph and take action
  app.store.subscribe((mutation, state) => {
    if (mutation.type === 'events/push') {
      const eventType = mutation.payload.type
      const eventData = mutation.payload.data

      switch (eventType) {
        case 'cart:add':
          log('Cart add event received', eventData);
          trackEvent('setCart');
          break;

        case 'product-detail:impression':
          log('Product detail impression', eventData);
          trackEvent('trackPageView');
          break;

        case 'user:login':
          log('User login event received', eventData);
          // trackEvent('setCustomerEmail', eventData.__ob__?.dep.subs[0]?.value?.auth?.user);
          break;

        case 'user:register':
          log('User register event received', eventData);
          // trackEvent('setCustomerEmail', eventData.__ob__?.dep.subs[0]?.value?.auth?.user);
          break;

        case 'newsletter:subscribe':
          log('Newsletter event received', eventData);
          trackEvent('setCustomerEmail', eventData.email);
          break;

        case 'checkout:impression':
          log('Checkout impression', eventData);
          break;
      }

      // All events sent by ralph since version 19.1.0
      // ------------------------------------------------
      // `widget:click` - data payload: `{ href }`
      // `menu:click` - data payload: `{ item }`
      // `search:click` - data payload: `{ type, data }`

      // All events sent by ralph since version 19.0.0
      // ------------------------------------------------
      // `cart:add` - data payload: `{ item, product }`
      // `cart:remove` - data payload: `{ item, product }`
      // `page:impression` - data payload: `{ route }`
      // `product:click` - data payload: `{ product, page, index, pageSize }`
      // `product:impression` - data payload: `{ product, page }`
      // `product-detail:impression` - data payload: `{ product }`
      // `favorite:add` - data payload: `{ productId, product }`
      // `favorite:remove` - data payload: `{ productId, product }`
      // `checkout:impression` - data payload: `{}`
      // `checkout:update` - data payload: `{ checkout }`
      // `checkout:purchase` - data payload: `{ order }`
      // `user:login` - data payload: `{}`
      // `user:logout` - data payload: `{}`
      // `user:register` - data payload: `{}`
      // `user:password-reset` - data payload: `{ email, resetKey }`
      // `user:delete` - data payload: `{}`
      // `newsletter:subscribe` - data payload: `{ email }`
    }
  })
}
