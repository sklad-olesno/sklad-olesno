<template>
  <div>

    <h1 class="f1 primary tc ttu fw6 mt5 mb3 lh-solid">Oferta</h1>

    <nuxtdown-body class="body cms" :body="page.body"/>


    <ul class="prices-block--list flex flex-wrap justify-center ph2">
      <li class="w-33-ns ph2 mb4" v-for="item in page.products">

        <h3 class="b f4 primary tl lh-title mb3">{{ item.name }}</h3>

        <p class="b">
          <img class="img-fluid" :src="item.image"/>
        </p>

        <ul class="tl">
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
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content("/pages").get(route.path)) || payload
    };
  }
};
</script>
