const path = require('path')

const moduleName = 'ralph-module-hello-retail'
const nameShort = 'hello-retail'

const defaults = {
  name: moduleName,
  nameShort: nameShort,
  debug: true,
  trackEvents: false
}

module.exports = async function(moduleOptions) {

  const options = {
    ...defaults,
    ...this.options[moduleName],
    ...moduleOptions
  }

  if (!options.enabled) {
    return false
  }

  // add hello-retail script
  if (options.trackEvents) {    
    this.options.head.script.push({
      src: 'https://helloretailcdn.com/helloretail.js',
      async: true,
      onload: `!function(){
        window.hrq=window.hrq||[];
        hrq.push(["init",{}])}();
        `
    })
  }

  this.addTemplate({
    src: path.resolve(__dirname, 'module.utils.js'),
    fileName: `${moduleName}.utils.js`,
    options
  })

  this.addPlugin({
    src: path.resolve(__dirname, 'module.plugin.js'),
    fileName: `${moduleName}.plugin.js`,
    options
  })

  // Add Mixins
  // this.nuxt.hook('vue:extend', Component => {
  //   Component.mixin(MyMixin)
  // })

  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: path.resolve(__dirname, 'components'),      
      prefix: 'Geins',
      extensions: ['vue']
    });
  });


  return true
}
module.exports.meta = require('../package.json')

