<template>
  <div class="contact-block">

    <h1 class="f1 primary tc ttu fw6 mt5 mb3">Kontakt</h1>

    <nuxtdown-body v-if="typeof page.body_before !== 'undefined'" class="cms tc mb5" :body="page.body_before"/>

    <div class="ph3 bg-off-white">
      <div class="center mw6 pb3">

        <div class="flex-ns mb3">

          <div class="ph1-l w-50-l">
            <h4 class="f4 b lh-title mb2 primary">Lokalizacja</h4>
            <address>
              {{ address.company_street }}<br/>
              {{ address.company_city }} {{ address.company_zip_code }}
            </address>
          </div>

          <div class="ph1-l w-50-l">
            <h4 class="f4 b lh-title mb2 primary">Godziny pracy</h4>
            <p>
              {{ address.company_hours_array[0] }}<br/>
              {{ address.company_hours_array[1] }}
            </p>
          </div>

        </div>


        <div class="mb4">
          <h4 class="f3 b lh-title mb3 tc">Napisz do nas</h4>

          <form action="" data-netlify="true" data-netlify-recaptcha="true">

            <div class="flex-l mhn1-l">
              <div class="ph1-l w-50-l mb3">
                <input type="text" id="name" placeholder="Imię" class="mb2 flex-auto w-100 ph0 indent">
                <label for="name">Imię</label>
              </div>

              <div class="ph1-l w-50-l mb3">
                <input type="email" id="email" placeholder="Email" class="mb2 flex-auto w-100 ph0 indent">
                <label for="email">Adres Email</label>
              </div>
            </div>

            <div>
              <textarea name="name" placeholder="Wiadomość" rows="8" cols="80" id="message" class="w-100"></textarea>
              <label for="message">Wiadomość</label>
            </div>

            <div class="flex-l mhn1-l">
              <div class="ph1-l w-50-l flex items-center">

                <input
                  type="checkbox"
                  id="checkbox"
                  placeholder="Name"
                  class="mr2 input-reset"
                  v-model="legalAgreement"
                >
                <span class="small-font tl" @click="legalAgreement = !legalAgreement">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych, podanych w powyższym formularzu, przez <b>{{ address.company_name }}</b> z siedzibą w Oleśnie. Wiem że w każdej chwili bedę mógł odwołać zgodę
                </span>
                <label for="checkbox">
                  Zgadzam się
                </label>
              </div>

              <div class="ph1-l w-50-l">
                <div data-netlify-recaptcha="true"></div>
              </div>
            </div>



            <div class="tc mt4">
              <button type="submit" class="btn w-100 w-auto-ns raise">Wyślij zapytanie</button>
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
  computed: {
    address() {
      return this.$store.getters.address
    },
    contact() {
      return this.$store.getters.contact
    }
  },
  data: () => ({
    legalAgreement: []
  }),
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content("/pages").get(route.path)) || payload
    };
  }
};
</script>

<style type="text/css">
  .small-font{
    font-size: 10px;
  }

  input[type=checkbox],
  input[type=checkbox]:focus,
  input[type=checkbox]:hover,
  input[type=checkbox]:focus:hover{
    font-size: 1rem;
    padding: 10px;
  }

  input[type=checkbox]:checked{
    background: #F1C007;
  }
</style>