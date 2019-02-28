<template>
  <div class="prices-block">

    <h1 class="f1 primary tc ttu fw6 mt5 mb4 lh-solid">Cennik</h1>

    <ul class="prices-block--list flex flex-wrap justify-center ph2">
      <li class="w-33-ns ph2 mb4" v-for="item in page.prices">

          <h3 class="b f4 primary tl lh-title mb3">{{ item.name }}</h3>
          <div class="flex">
            <p class="secondary f3 b tl lh-title center mb1 flex flex-column w-75 flex-auto">
              {{ item.non_packed }}
              <span class="f6">luzem</span>
            </p>
            <p class="grey-3 f3 b tl lh-title center flex flex-column w-100 flex-auto">
              {{ item.packed }}
              <span class="f6">worek</span>
            </p>
          </div>

          <p class="b">
            <img class="img-fluid" :src="item.image"/>
          </p>

      </li>
      <li class="w-33-ns ph2"></li>
      <li class="w-33-ns ph2"></li>
      <li class="w-33-ns ph2"></li>
    </ul>

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
  mounted() {
    this.$el.classList.remove('pb5');
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content("/pages").get(route.path)) || payload
    };
  }
};
</script>

<style type="text/css">
</style>