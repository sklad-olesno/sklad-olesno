<template>
  <div class="contact-block">

    <h1 class="f1 primary tc ttu fw6 mt5">Kontakt</h1>

    <nuxtdown-body v-if="typeof page.body_before !== 'undefined'" class="cms tc mb5 mt3" :body="page.body_before"/>

    <div class="ph3 bg-off-white">
      <div class="center mw6 pv3">

        <p>We’d love to get in touch with you and hear your ideas and questions. We strive to grow and improve constantly and your feedback is valuable for us.</p>

        <h3 class="f4 b lh-title mb2">How can I get…?</h3>
        <p>You can also use the form below for any inquiries about coffee availability, monthly subscriptions and scheduling a 1-on-1 session with our baristas. Don’t be shy, drop us a line!</p>

        <div class="flex-ns mb3">

          <div>
            <h4 class="f4 b lh-title mb2 primary">Location</h4>
            <p>3153 Lynn Avenue, South San Francisco, California 94080</p>
          </div>

          <div>
            <h4 class="f4 b lh-title mb2 primary">Working hours</h4>
            <p>Monday – Saturday: 9AM – 7PM We’re closed on Sundays</p>
          </div>

        </div>


        <div class="mb4">
          <h4 class="f3 b lh-title mb3 tc">Drop us a line below</h4>

          <form action="">
            <div class="flex-l mhn1-l">

              <div class="ph1-l w-50-l">
                <fieldset>
                  <input type="text" id="name" placeholder="Name" class="w-100 mb2">
                  <label for="name">Name</label>
                </fieldset>
              </div>

              <div class="ph1-l w-50-l">
                <fieldset>
                  <input type="email" id="email" placeholder="Email" class="w-100 mb2">
                  <label for="email">Email</label>
                </fieldset>
              </div>
            </div>


            <fieldset>
              <textarea name="name" placeholder="Your message" rows="8" cols="80" id="message" class="w-100"></textarea>
              <label for="message">Your message</label>
            </fieldset>

            <div class="tc">
              <button type="submit" class="btn w-100 w-auto-ns raise">Submit</button>
            </div>
          </form>
        </div>


      </div>
    </div>

    <nuxtdown-body v-if="typeof page.body_after !== 'undefined'" class="cms tc mb5 mt3" :body="page.body_after"/>

    <span v-if="typeof page.body_after === 'undefined'" class="db mb5"> </span>
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
