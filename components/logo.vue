<template>
  <div class="logo" :class="theme">
    <img v-if="theme !== 'dark'" src="~/assets/logo.svg" alt="Skład opału logo" :class="classes">
    <img v-if="theme === 'dark'" src="~/assets/logo-white.svg" alt="Skład opału logo" :class="classes">
  </div>
</template>

<script>
  export default {
    name: 'cLogo',
    props: {
      'theme': {
        type: String,
        default: 'light',
        required: false
      },
      'classes': {
        type: String,
        default: '',
        required: false
      },
    }
  }
</script>

<style>

</style>
