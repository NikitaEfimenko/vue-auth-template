// vue.config.js

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    devServer: {
        proxy: 'http://localhost:5012'
    },
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ]
  },
}