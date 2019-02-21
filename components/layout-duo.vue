<template>
  <div class="flex-l flex-wrap mhn1-l ph3 center mw7 pv4 ph3" :class="mainClass">

    <div class="w-40-l flex justify-center items-center">
      <h2 class="f2 mb2 b lh-title">
        {{ data.section_title }}
      </h2>

      <p class="pr3-m center flex justify-center items-center" v-if="data.section_image">
        {{ data.section_description }}
      </p>

      <a v-if="data.section_layout_button === 'section_layout_button_text'" :href="data.section_button_link" class="btn raise">
        {{ data.section_button_title }}
      </a>
    </div>

    <div class="w-60-l mb0 flex justify-center items-center">
      <p v-if="!data.section_image" class="pl3-m center flex justify-center items-center">
        {{ data.section_description }}
      </p>

      <img v-if="data.section_image !== ''" :src="data.section_image" alt="" class="mb3">

      <a v-if="data.section_layout_button === 'section_layout_button_text'" :href="data.section_button_link" class="btn raise">
        {{ data.section_button_title }}
      </a>
    </div>

    <div v-if="data.section_layout_button === 'section_layout_button_end'" class="w-100-l tc">
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
      'data': {
        type: Object,
        default: {
          section_title: "",
          section_description: "",
          section_image: false,
          section_button_title: "",
          section_button_link: ""
        },
        required: false
      }
    }
  }
</script>

<style>

</style>
