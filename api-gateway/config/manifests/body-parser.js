module.exports = {
    version: '1.0.0',
    init: (pluginContext) => {
       pluginContext.registerPolicy(require('../policies/body-parser'))
    },
    policies: ['body-parser']
  }