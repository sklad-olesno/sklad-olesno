<template>
  <div>
    <div class="pv5 pv6-l ph3 bg-center cover" style="background-image: url('/img/home/jumbotron.jpg')">
      <div class="mw7 center ph3">
        <div class="db mb3">
          <div class="mw7 relative bg-fix-primary mb3">
            <h1 class="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
              Great coffee with a conscience
            </h1>
          </div>
          <div class="mw7 relative bg-fix-primary">

            <p class="b f4 di lh-title mb3 white mw6 bg-primary">
              Support sustainable farming while enjoying a cup
            </p>

          </div>
        </div>
      </div>
    </div>


    <div class="bg-grey-1 pv4">
      <div class="flex-l mhn1-l ph3 center mw7">
        <h2 class="f2 b lh-title mb2 w-40-l">Why Kaldi?</h2>
        <p class="w-60-l mb0">Kaldi is the coffee store for everyone who believes that great coffee shouldn't just taste good, it should do good too. We source all of our beans directly from small scale sustainable farmers and make sure part of the profits are reinvested in their communities.</p>
      </div>
    </div>


    <div class="bg-off-white pv4">
      <div class="ph3 mw7 center">
        <h2 class="f2 b lh-title mb2">What we offer</h2>
        <p class="mb4 mw6">Kaldi is the ultimate spot for coffee lovers who want to learn about their java’s origin and support the farmers that grew it. We take coffee production, roasting and brewing seriously and we’re glad to pass that knowledge to anyone.</p>

        <div class="flex-ns mhn2-ns mb3">
          <div class="ph2-ns w-50-ns">
            <img src="img/illustrations/coffee.svg" alt="" class="center db mb3" style="width: 240px">
            <p>We sell green and roasted coffee beans that are sourced directly from independent farmers and farm cooperatives. We’re proud to offer a variety of coffee beans grown with great care for the environment and local communities. Check our post or contact us directly for current availability.</p>
          </div>

          <div class="ph2-ns w-50-ns">
            <img src="/img/illustrations/coffee-gear.svg" alt="" class="center db mb3" style="width: 240px">
            <p>We offer a small, but carefully curated selection of brewing gear and tools for every taste and experience level. No matter if you roast your own beans or just bought your first french press, you’ll find a gadget to fall in love with in our shop.</p>
          </div>
        </div>


        <div class="tc">
          <a href="/products" class="btn raise">See all products</a>
        </div>

      </div>
    </div>


    <div class="bg-grey-1 pv4">
      <div class="ph3 mw7 center">

        <div class="flex-l mhn2-l">
          <div class="w-40-l ph2-l">
            <h2 class="f2 b lh-title mb2">Our values</h2>

            <p>Coffee is an amazing part of human culture but it has a dark side too – one of colonialism and mindless abuse of natural resources and human lives. We want to turn this around and return the coffee trade to the drink’s exhilarating, empowering and unifying nature.</p>
          </div>

          <div class="w-60-l ph2-l">
            <img src="img/home/about-section.jpg" alt="" class="mb3">
          </div>
        </div>

        <div class="tc">
          <a href="/values" class="btn raise">Read more</a>
        </div>

      </div>
    </div>


    <div class="bg-off-white pv4">
      <div class="ph3 mw7 center">

        <h2 class="f2 b lh-title mb3">Latest stories</h2>

        <div class="w-100 flex-ns mhn1-ns flex-wrap mb3">

          <div class="ph1-ns w-50-ns flex">
            <a href="/post/brewing-chemex/" class="no-underline pa3 bg-grey-1 br1 mb2 db raise w-100">

              <h2 class="f3 b lh-title mb1 primary">A beginners’ guide to brewing with Chemex</h2>
              <p class="mid-gray lh-title mb2">Wed, Jan 4, 2017</p>
              <p class="mb0">Brewing with a Chemex probably seems like a complicated, time-consuming ordeal, but once you get used to the process, it becomes a soothing ritual that's worth the effort every time.</p>
              <p class="link b dib black mb0">Read more →</p>

            </a>

          </div>

          <div class="ph1-ns w-50-ns flex">
            <a href="/post/jamaica-blue/" class="no-underline pa3 bg-grey-1 br1 mb2 db raise w-100">

              <h2 class="f3 b lh-title mb1 primary">Just in: small batch of Jamaica Blue Mountain in store next week</h2>
              <p class="mid-gray lh-title mb2">Wed, Jan 4, 2017</p>
              <p class="mb0">We’re proud to announce that we’ll be offering a small batch of Jamaica Blue Mountain coffee beans in our store next week.</p>
              <p class="link b dib black mb0">Read more →</p>

            </a>

          </div>

          <div class="ph1-ns w-50-ns flex">
            <a href="/post/making-sense/" class="no-underline pa3 bg-grey-1 br1 mb2 db raise w-100">

              <h2 class="f3 b lh-title mb1 primary">Making sense of the SCAA’s new Flavor Wheel</h2>
              <p class="mid-gray lh-title mb2">Sat, Dec 17, 2016</p>
              <p class="mb0">The Coffee Taster’s Flavor Wheel, the official resource used by coffee tasters, has been revised for the first time this year.</p>
              <p class="link b dib black mb0">Read more →</p>

            </a>

          </div>

        </div>

        <div class="tc">
          <a href="/post" class="btn raise">Read more</a>
        </div>

      </div>
    </div>


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
        page: (await app.$content("/pages").get('homepage')) || payload
      };
    }
  };
</script>
