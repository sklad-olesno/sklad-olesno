<template>
  <div class="flex flex-column min-vh-100">

    <nav class="flex flex-wrap justify-between items-center center bg-white divider-grey relative w-100" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <a href="/" class="pa3 db mr4 h-100 w4 flex-none mh0">
        <cLogo
          theme="light"
          classes="br0 db mb0 w-100"
        />
      </a>

      <ul class="menu flex flex-wrap b grey-3 justify-center mb3 mb0-ns">
        <li>
          <nuxt-link :to="'/offer'" class="pa2 pa3-ns no-underline db">Oferta</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/prices'" class="pa2 pa3-ns no-underline db">Cennik</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/transport'" class="pa2 pa3-ns no-underline db">Transport</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/mati-transport'" class="pa2 pa3-ns no-underline db">Mati-Transport</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/contact'" class="pa2 pa3-ns no-underline db">Kontakt</nuxt-link>
        </li>
      </ul>
    </nav>

    <main class="flex-auto tc">
      <nuxt class="center mw7"/>
    </main>

    <footer class="bg-black ph3 pv4 white">

      <div class="mw7 center pt3">

        <div class="measure-narrow center mb4">

          <a href="/" class="no-underline db">
            <cLogo
              theme="dark"
              classes="db w4 center mb4 br0"
            />
          </a>
        </div>

        <div class="flex-ns justify-between">

          <div>
            <h3 class="f4 b lh-title mb1 primary">Menu</h3>
            <ul class="mb3">
              <li><nuxt-link :to="'/offer'" class="link db">Oferta</nuxt-link></li>
              <li><nuxt-link :to="'/prices'" class="link db">Cennik</nuxt-link></li>
              <li><nuxt-link :to="'/transport'" class="link db">Transport</nuxt-link></li>
              <li><nuxt-link :to="'/mati-transport'" class="link db">Mati-Transport</nuxt-link></li>
              <li><nuxt-link :to="'/contact'" class="link db">Kontakt</nuxt-link></li>
            </ul>
          </div>

          <div>
            <h3 class="f4 b lh-title mb1 primary">Adres</h3>
              <address>
              {{ address.company_street }}<br/>
              {{ address.company_city }} {{ address.company_zip_code }}
              </address>
              <br/>
              {{ address.company_hours_array[0] }}<br/>
              {{ address.company_hours_array[1] }}
          </div>

          <div>
            <h3 class="f4 b lh-title mb2 primary">Kontakt</h3>
            <ul class="mhn2">
              <li class="dib ph2 raise">
                <a :href="contact.facebook" class="link bg-white black db relative br-100 pa2">
                  <svg width="16px" height="16px" class="db">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <p class="tc grey-2 center f6 mt4 mb0">{{ new Date().getFullYear() }} © {{ address.company_name }}</p>

    </footer>
  </div>
</template>

<script>
  import cLogo from '~/components/logo.vue';

  export default {
    components: {
      cLogo
    },
    computed: {
      address() {
        return this.$store.getters.address
      },
      contact() {
        return this.$store.getters.contact
      }
    },
    mounted(){

    }
  }
</script>

<style type="text/css">
  .menu a{
    font-size: 16px;
  }

  @media(min-width: 768px){
    .menu a{
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    .divider-grey ul a:focus,.divider-grey ul a:hover {
      box-shadow: none;
    }
  }
</style>
