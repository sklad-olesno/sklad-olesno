<template>
  <div class="example-content">
    <nuxtdown-body class="body" :body="page.body_before"/>
    <ul>
      <li v-for="item in page.prices">
        <div>{{ item.name }}</div>
        <div>{{ item.granulation }}</div>
        <div>{{ item.calorific }}</div>
        <div>{{ item.non_packed }}</div>
        <div>{{ item.packed }}</div>
        <div>{{ item.ash }}</div>
        <div>{{ item.image }}</div>
      </li>
    </ul>
    <nuxtdown-body class="body" :body="page.body_after"/>
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
