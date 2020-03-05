module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yafig-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YAFIG Frontend in NuxtJS' }
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
  ** Build configuration
  */
  build: {
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
  },
  modules: [
	  '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-buefy'
  ],
  axios: {
	  baseURL: 'https://app.fakejson.com'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'q/G0Eh7AmU?token=HoyqjBs1mE9itMb1TO7aZw', method: 'post', propertyName: 'token'},
          user: {url: 'q/G0Eh7AmU?token=HoyqjBs1mE9itMb1TO7aZw', method: 'get', propertyName: 'username'},
          logout: false
        }
      }
    }
  },
  plugins: [
    {src: "~plugins/ga.js", mode: "client"}
  ]
}

