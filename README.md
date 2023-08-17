[![NPM Package][npm]][npm-url]
[![NPM Downloads][npm-downloads-per-month]][npm-trends]
![Geins][mit-shield]

[![Start Geins Free Trial][geins-tiral-img]][geins-tiral-url] [![Geins Docs][geins-docs-img]][geins-docs-url]

[![geins-hello-retail](https://raw.githubusercontent.com/geins-io/resources/master/images/banners/repos/geins-helloretail.jpg)](https://www.geins.io)

# Hello Retail module for Geins PWA Storefront

A module for Geins PWA Storefront Ralph that allows you to effortlessly integrate Hello Retail features into your storefront. With this module, you can enhance your online store with powerful Hello Retail functionalities in just a few seconds.

## Pre-requisites

- Geins Account and PWA Storefront Ralph. [Get a free trial here](https://www.geins.io)
- Hello Retail Account. [Get account here](https://helloretail.com/)


## Description

The Hello Retail module integrates the Hello Retail tracking SDK into your Storefront Ralph. 

Hello Retail offers a suite of tools and capabilities that can enhance your online store's performance, improve user experience, and boost conversions.

## Installation

To install the Hello Retail module, follow these steps:

### 1. Install the module

Open your terminal and run the following command:

```bash
npm i @geins/ralph-module-hello-retail
```

### 2. Add the module to your Geins PWA Storefront Ralph

To add the module to your Geins PWA Storefront Ralph, open your `nuxt.config.js` file and add the following code snippet:

```js
...
  modules: [
    [
      '@geins/ralph-module-hello-retail',
      {
          enabled: true,
          debug: true,
          trackEvents: true
      }
    ]
  ]
```
## User tracking with Hello Retail

To track user activity on your online store, you need to:

1. Register your website with Hello Retail. [here](https://my.helloretail.com/)
2. Install the Ralph Hello Retail module (see installation above) and publish your site.
3. Configure your website on Hello Retail. Click `Check JavaScript Installation`. (**Important! This will only work if you have published your site after the installation of this module.**).

Once your website has been configured, Hello Retail will start tracking page visitors, assigning each of them to a unique ID (which can later be matched with an e-mail).

In order to track ralph events such as add to cart, viewed product etc, you will need to set the module option `trackEvents` to `true`.

The ralph events that will currently be tracked are:

| Type of activity  | Event tracked                                   | Information sent |
| ----------------- | ------------------------------------------------| ------------------- |
| Add to cart       | User adds a product to the cart                 | Canonical URLs and product IDs for all items in your cart |
| Remove from cart  | User removes a product from their cart          | Canonical URLs and product IDs for all items in your cart |
| Viewed product    | User navigates to a product page                | Canonical URL and product ID |

## Module Options

Add extra options to module configuration in `nuxt.config.js` file.
| Parameter | Default | Required | Example |
|-|-|-|-|
| enabled | `true` | No | Enables the module |
| debug | `true` | No | Enables debug info to console |
| trackEvents | `false` | No | If set to `true`, ralph events will be tracked |

## Usage

Once the Hello Retail module is installed and configured, you can start leveraging the power of Hello Retail features in your Geins PWA Storefront Ralph. Explore the various functionalities provided by Hello Retail and integrate them seamlessly into your online store to enhance user experience and drive conversions.

## Components (TBA)

- Search autocomplete
- Product recommendations




[npm]: https://img.shields.io/npm/v/@geins/ralph-module-hello-retail
[npm-url]: https://www.npmjs.com/package/@geins/ralph-module-hello-retail
[npm-downloads-per-month]: https://img.shields.io/npm/dm/@geins/ralph-module-hello-retail.svg
[npm-trends]: https://npmtrends.com/@geins/ralph-module-hello-retail
[geins-docs-url]: https://docs.geins.io
[geins-docs-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-docs-read-v3.json
[geins-tiral-url]: https://www.geins.io
[geins-tiral-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-fee-tiral.json
[mit-shield]: https://img.shields.io/badge/license-MIT-green
[mit-url]: https://en.wikipedia.org/wiki/MIT_License
