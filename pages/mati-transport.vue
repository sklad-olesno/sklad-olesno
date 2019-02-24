<template>
  <div class="mati-transport-block">

    <h1 class="f1 primary tc ttu fw6 mt5 mb3">Mati transport</h1>

    <nuxtdown-body class="body" :body="page.body"/>
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

<style type="text/css">
  .mati-transport-block .body p{
    margin-left: auto;
    margin-right: auto;
  }
</style>