<template>
  <div class="mw7 ph4">
    <h1 class="f1 primary tc ttu fw6 mt5 mb4 lh-solid">Transport</h1>

    <nuxtdown-body class="body cms" :body="page.body"/>
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content("/pages").get(route.path)) || payload
    };
  }
};
</script>
