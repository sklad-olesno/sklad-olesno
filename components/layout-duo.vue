<template>
  <div class="flex-l flex-wrap items-center mhn1-l ph3 center mw7 pv4 ph3" :class="mainClass">

    <div class="w-40-l flex justify-left items-center flex-wrap">
      <h2 class="f2 mb0 b lh-title tl" :class="theme === 'dark' ? 'grey-4' : 'primary'">
        {{ data.section_title }}
      </h2>

      <p class="pr3-m center flex justify-center items-center tl mv3 grey-4" v-if="data.section_image">
        {{ data.section_description }}
      </p>

      <a
        v-if="data.section_button_link && (data.section_layout_button === 'section_layout_button_text')"
        :href="data.section_button_link"
        class="btn raise tl"
      >
        {{ data.section_button_title }}
      </a>
    </div>

    <div class="w-60-l mb0 flex justify-center items-center">
      <p v-if="!data.section_image" class="pl3-m center flex justify-center items-center tl mv3 grey-4">
        {{ data.section_description }}
      </p>

      <img v-if="data.section_image !== ''" :src="data.section_image" alt="" class="mb3">

      <a
        v-if="data.section_button_link && (data.section_layout_button === 'section_layout_button_image')"
        :href="data.section_button_link"
        class="btn raise tl ml0"
      >
        {{ data.section_button_title }}
      </a>
    </div>

    <div
      v-if="data.section_button_link && (data.section_layout_button === 'section_layout_button_end')"
      class="w-100-l tc"
    >
      <a :href="data.section_button_link" class="btn raise">{{ data.section_button_title }}</a>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cLayoutDuo',
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      },
      'theme': {
        type: String,
        default: 'light',
        required: false
      },
      'data': {
        type: Object,
        default: {
          section_title: "",
          section_description: "",
          section_image: false,
          section_button_title: "",
          section_button_link: false
        },
        required: false
      }
    }
  }
</script>

<style>

</style>
