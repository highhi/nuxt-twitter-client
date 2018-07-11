module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-twitter-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Reset style
  */
  css: [
    '~/assets/stylesheets/reset.css',
    '~/assets/stylesheets/style.css'
  ],
  /*
  ** Import nuxt modules
  */
  modules: ['@nuxtjs/axios', '@nuxtjs/apollo', '@nuxtjs/dotenv'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default'
    }
  },
  env: { 
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID
  },
  /*
  ** Build configuration
  */
  plugins: [
    '~plugins/dayjs.js',
    '~plugins/tweet.js',
    '~plugins/firebase.js',
  ],
  build: {
    vendor: [
      'dayjs',
      'twitter-text',
      'firebase/app',
      'firebase/auth'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
