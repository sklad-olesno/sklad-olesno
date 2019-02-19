<template>
  <div class="prices-block">

    <h1 class="f1 primary tc ttu fw6">Cennik</h1>

    <nuxtdown-body class="cms tc mb5 mt3" v-if="typeof page.body_before !== 'undefined'" :body="page.body_before"/>

    <ul class="prices-block--list flex mhn2-ns mw7 flex-wrap justify-center">
      <li class="w-33-ns ph2 mb4" v-for="item in page.prices">

          <div class="ph2">
            <h3 class="b f5 grey-3 tc lh-title mb1">{{ item.name }}</h3>
            <p class="primary f1 b tc lh-title center mb1">
              {{ item.non_packed }}
            </p>
            <p class="secondary f2 b tc lh-title center">
              {{ item.packed }}
            </p>
            <p class="b">
              <img class="img-fluid" :src="item.image"/>
            </p>
            <ul>
              <li>
                <p class="pb2 mb2 divider-grey">Granulacja: {{ item.granulation }}</p>
              </li>

              <li>
                <p class="pb2 mb2 divider-grey">Kaloryczność: {{ item.calorific }}</p>
              </li>

              <li>
                <p class="">Popiół: {{ item.ash }}</p>
              </li>

            </ul>

          </div>

      </li>
    </ul>
    <nuxtdown-body class="cms tc mb5 mt5" v-if="typeof page.body_after !== 'undefined'" :body="page.body_after"/>
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
  .prices-block--list{

  }
</style>