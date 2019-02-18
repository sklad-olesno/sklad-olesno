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
      "pages/homepage",
      {
        page: "/index",
        permalink: "/",
        isPost: false
      }
    ],
    [
      "offer",
      {
        page: "/offer",
        permalink: "/oferta",
        isPost: false
      }
    ],
    [
      "prices",
      {
        page: "/prices",
        permalink: "/prices",
        isPost: false
      }
    ],
    [
      "transport",
      {
        page: "/transport",
        permalink: "/transport",
        isPost: false
      }
    ],
    [
      "mati-transport",
      {
        page: "/mati-transport",
        permalink: "/mati-transport",
        isPost: false
      }
    ],
    [
      "contact",
      {
        page: "/contact",
        permalink: "/contact",
        isPost: false
      }
    ]
  ]
};
