module.exports = {
  modules: [
    "nuxtdown",
    'nuxt-netlify-http2-server-push',
    {
      // Specify relative path to the dist directory and its content type
      resources: [
        { path: '**/*.js', as: 'script' },
        { path: '**/*.css', as: 'style' },
        { path: 'img/logo.svg', as: 'image' },
        { path: 'img/logo-white.svg', as: 'image' },
        { path: 'content/pages/*.json', as: 'application/json' },

      ]
    }
  ],
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'pl',
    },
    title: "Skład opału",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Skład opału"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  css: [
    '~/assets/styles.css',
    '~/assets/custom.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
