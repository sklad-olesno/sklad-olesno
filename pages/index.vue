<template>
  <div>
    <div class="pv5 pv6-l ph3 bg-center cover" v-bind:style="{ backgroundImage: 'url(' + page.baner_image + ')' }">
      <div class="mw7 center ph3">
        <div class="db mb3">
          <div class="mw7 relative bg-fix-primary mb3">
            <h1 class="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
              {{ page.baner_title }}
            </h1>
          </div>
          <div class="mw7 relative bg-fix-primary">
            <p class="b f4 di lh-title mb3 white mw6 bg-primary">
              {{ page.baner_subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mw7 center">

      <ul class="flex flex-wrap justify-center ph2">
        <li class="w-33-ns ph2 mb4" v-for="section in page.sections">
          {{ section.section_title }}
          {{ section.section_description }}
          <img :src="section.section_image" class=""/>
          {{ section.section_button_title }}
          {{ section.section_button_link }}
        </li>
      </ul>

      <div class="bg-grey-1 pv4">
        <div class="flex-l mhn1-l ph3 center mw7">
          <h2 class="f2 b lh-title mb2 w-40-l">Why Kaldi?</h2>
          <p class="w-60-l mb0">Kaldi is the coffee store for everyone who believes that great coffee shouldn't just taste good, it should do good too. We source all of our beans directly from small scale sustainable farmers and make sure part of the profits are reinvested in their communities.</p>
        </div>
      </div>


      <div class="bg-off-white pv4">
        <div class="ph3 mw7 center">
          <h2 class="f2 b lh-title mb2">What we offer</h2>
          <p class="mb4 center">Kaldi is the ultimate spot for coffee lovers who want to learn about their java’s origin and support the farmers that grew it. We take coffee production, roasting and brewing seriously and we’re glad to pass that knowledge to anyone.</p>


          <div class="tc">
            <a href="/products" class="btn raise">See all products</a>
          </div>

        </div>
      </div>


      <div class="bg-grey-1 pv4 mb4">
        <div class="ph3 mw7 center">

          <div class="flex-l mhn2-l">
            <div class="w-40-l ph2-l">
              <h2 class="f2 b lh-title mb2">Our values</h2>

              <p>Coffee is an amazing part of human culture but it has a dark side too – one of colonialism and mindless abuse of natural resources and human lives. We want to turn this around and return the coffee trade to the drink’s exhilarating, empowering and unifying nature.</p>
            </div>

            <div class="w-60-l ph2-l">
              <img :src="page.baner_image" alt="" class="mb3">
            </div>
          </div>

          <div class="tc">
            <a href="/values" class="btn raise">Read more</a>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
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
    },
    asyncData: async ({ app, route, payload }) => {
      return {
        page: (await app.$content("/pages").get('homepage')) || payload
      };
    }
  };
</script>
