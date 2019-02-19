<template>
  <div>
    <nav class="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <a href="/" class="pa3 db mr4 h-100 w4 flex-none mh0">
        <img src="~/assets/logo.svg" alt="Skład opału logo" class="br0 db mb0 w-100">
      </a>

      <ul class="flex b grey-3">
        <li>
          <nuxt-link :to="'/offer'" class="pa3 no-underline db">Oferta</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/prices'" class="pa3 no-underline db">Cennik</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/transport'" class="pa3 no-underline db">Transport</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/mati-transport'" class="pa3 no-underline db">Mati-Transport</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/contact'" class="pa3 no-underline db">Kontakt</nuxt-link>
        </li>
      </ul>
    </nav>

    <main class="mw7 center tc">
      <nuxt/>
    </main>

    <footer class="bg-black ph3 pv4 white">

      <div class="mw7 center pt3">

        <div class="measure-narrow center mb4">

          <img src="~/assets/logo-white.svg" alt="Skład opału logo" class="db w4 center mb4 br0">

        </div>

        <div class="flex-ns justify-between">

          <div>
            <h3 class="f4 b lh-title mb1 primary">Kaldi</h3>
            <ul class="mb3">
              <li><a href="/" class="link">Home</a></li>
              <li><a href="/products" class="link">Our products</a></li>
              <li><a href="/values" class="link">About</a></li>
              <li><a href="/post" class="link">Blog</a></li>
              <li><a href="/contact" class="link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="f4 b lh-title mb1 primary">Find out more</h3>
            <ul class="mb3">
              <li><a href="/post/jamaica-blue/" class="link">Latest offers</a></li>
              <li><a href="/contact" class="link">Schedule and appointment</a></li>
            </ul>
          </div>

          <div>
            <h3 class="f4 b lh-title mb2 primary">Social media</h3>
            <ul class="mhn2">
              <li class="dib ph2 raise">
                <a href="#" class="link bg-white black db relative br-100 pa2">
                  <svg width="16px" height="16px" class="db">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  </div>
</template>
