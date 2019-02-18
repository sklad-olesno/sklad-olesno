module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [
      "pages",
      {
        page: "/pages/_page",
        permalink: "/:slug",
        isPost: false
      }
    ]
  ]
  // content: [
  //   ['pages', {
  //     page: '/pages/_page',
  //     permalink: '/pages/:slug',
  //     isPost: false,
  //     data: {
  //       generatedBy: 'Nuxt with the nuxtdown module'
  //     },
  //     breadcrumbs: true,
  //     toc: 1,
  //     markdown: {
  //       plugins: {
  //         toc: {
  //           permalinkClass: 'nuxtdown-toc',
  //           permalinkSymbol: '↗'
  //         },
  //         attrs: require('markdown-it-attrs'),
  //         figures: [require('markdown-it-implicit-figures'), { figcaption: true }],
  //         video: require('markdown-it-video')
  //       }
  //     }
  //   }]
  // ]
};
