module.exports = {
  target: "static",
  modules: [
    "nuxtdown",
    [
      "@nuxtjs/pwa",
      {
        icon: false,
      },
    ],
    [
      "@nuxtjs/google-tag-manager",
      {
        id: "GTM-N59H54M",
      },
    ],
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "/admin",
        Sitemap:
          (process.env.BASE_URL || "http://localhost:3000") + "/sitemap.xml",
      },
    ],
    [
      "@reallifedigital/nuxt-image-loader-module",
      {
        imagesBaseDir: "dist",
        imageStyles: {
          small: {
            macros: ["scaleAndCrop|160|90"],
            actions: ["quality|80"],
          },
          medium: {
            macros: ["scaleAndCrop|320|180"],
            actions: ["quality|80"],
          },
          large: {
            macros: ["scaleAndCrop|640|360"],
            actions: ["quality|80"],
          },
          banner: {
            macros: ["scaleAndCrop|1920|1080"],
            actions: ["quality|90"],
          },
        },
        // Optional responsive style profiles:
        responsiveStyles: {
          large: {
            srcset: "small 160w, medium 320w, large 640w, banner 1200w",
            sizes: "(min-width: 1280px) 100vw, 50vw",
          },
          thumb: {
            srcset: "small 160w, medium 320w, large 640w",
            sizes: "(min-width: 1280px) 100vw, 50vw",
          },
        },
      },
    ],
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    "nuxt-polyfill",
  ],
  manifest: {
    lang: "pl",
    display: "browser",
  },
  markdownit: {
    preset: "default",
    html: true,
    typographer: true,
    linkify: true,
    breaks: true,
    injected: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
  sitemap: {
    hostname: process.env.BASE_URL || "http://localhost:3000",
  },
  polyfill: {
    features: [
      // {
      //   require: 'intersection-observer',
      //   detect: () => 'IntersectionObserver' in window,
      // }
    ],
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "pl",
    },
    title: "Skład opału - Olesno",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Skład opału wraz z przewozem na terenie Olesna granic",
      },
      { name: "robots", content: "INDEX, FOLLOW" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  generate: {
    dir: "public",
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#FFBB43" },
  css: ["~/assets/styles.css", "~/assets/custom.css"],
  /*
   ** Build configuration
   */
  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
