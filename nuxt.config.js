module.exports = {
  modules: [
    "nuxtdown",
      [
        'nuxt-netlify-http2-server-push',
        {
          // Specify relative path to the dist directory and its content type
          resources: [
            { path: '**/*.css', as: 'style' },
            { path: '/_nuxt/img/*.svg', as: 'image/svg+xml' },
            { path: '/_nuxt/content/pages/*.json', as: 'application/json' },
          ]
        }
      ],
    '@nuxtjs/markdownit',
      [
        '@nuxtjs/pwa', {
          icon: false
        }
      ],
    ['@nuxtjs/google-tag-manager',
      { id: 'GTM-N59H54M' }
    ],
    '@nuxtjs/sitemap'
  ],
  manifest: {
    lang: 'pl',
    display: "browser",
  },
  markdownit: {
    preset: 'default',
    html: true,
    typographer: true,
    linkify: true,
    breaks: true,
    injected: true
  },
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
    title: "Skład opału - Olesno",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Skład opału wraz z przewozem na terenie Olesna granic"
      },
      {name: "robots", content: "INDEX, FOLLOW"}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
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
