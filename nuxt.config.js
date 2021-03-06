const pkg = require('./package')
const { getConfigForKeys } = require('./lib/config.js')

const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CPA_ACCESS_TOKEN',
  'CTF_CDA_HOSTNAME',
  'CTF_CPA_HOSTNAME'
])

const { createClient } = require('./plugins/contentful')
const client = createClient(ctfConfig)

const buildDir = process.env.NODE_DEPLOY === 'production' ? 'prod-dist' : 'preview-dist'
const generateDir = process.env.NODE_DEPLOY === 'production' ? 'prod-doc' : 'preview-doc'

module.exports = {
  mode: 'universal',
  buildDir: buildDir,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful.js',
    '~/plugins/firebase.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|preview-dist|prod-dist|preview-doc|prod-doc)/
        })
      }
    }
  },
  generate: {
    routes() {
      return client
        .getEntries(ctfConfig.CTF_BLOG_POST_TYPE_ID)
        .then((entries) => {
          return [...entries.items.map(entry => `/articles/${entry.sys.id}`)]
        })
    },
    dir: generateDir
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_CPA_ACCESS_TOKEN: ctfConfig.CTF_CPA_ACCESS_TOKEN,
    CTF_CDA_HOSTNAME: ctfConfig.CTF_CDA_HOSTNAME,
    CTF_CPA_HOSTNAME: ctfConfig.CTF_CPA_HOSTNAME,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  server: {
    port: 8000
  }
}
