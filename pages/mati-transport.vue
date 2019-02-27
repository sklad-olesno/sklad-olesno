<template>
  <div class="mati-transport-block">

    <h1 class="f1 primary tl ttu fw6 mt5 mb3 lh-solid">Mati transport</h1>

    <nuxtdown-body class="body" :body="page.body"/>

    <ul class="flex flex-column justify-center">
      <li v-for="(data, key, index) in page.sections" :class="key % 2 !== 0 ? 'bg-grey-1' : 'bg-off-white'">

        <cLayoutSingle
          v-if="data.section_layout_block === 'single' || typeof data.section_layout_block === 'undefined'"
          :theme="key % 2 === 0 ? 'dark' : 'light'"
          :data="data"
        />

        <cLayoutDuo
          v-if="data.section_layout_block === 'duo'"
          :theme="key % 2 === 0 ? 'dark' : 'light'"
          :data="data"
        />

      </li>
    </ul>
  </div>
</template>

<script>
  import cLayoutSingle from '~/components/layout-single.vue';
  import cLayoutDuo from '~/components/layout-duo.vue';

  export default {
    components: {
      cLayoutSingle,
      cLayoutDuo
    },
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
      this.$el.classList.remove('mw7');
      this.$el.classList.remove('center');
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
  .mati-transport-block .body p{
    margin-left: auto;
    margin-right: auto;
  }
</style>