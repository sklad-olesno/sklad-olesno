<template>
  <div :class="mainClass" class="mw7 pv4 ph3 center">

      <h2 class="f2 b lh-title mb2">
        {{ data.section_title }}
      </h2>

      <p
        class="center"
        :class="(data.section_button_title !== '' ? 'mb0' : 'mb4')"
      >
        {{ data.section_description }}
      </p>

      <a
        v-if="data.section_button_link && (data.section_button_link === 'section_layout_button_text')"
        :href="data.section_button_link"
        class="btn raise center tc"
      >
        {{ data.section_button_title }}
      </a>

      <img
        v-if="data.section_image !== ''"
        :src="data.section_image"
        class="center tc"
      />

      <a
        v-if="data.section_button_link && (data.section_layout_button === data.section_layout_button_image || data.section_layout_button === data.section_layout_button_end)"
        :href="data.section_button_link"
        class="btn raise center tc"
      >
        {{ data.section_button_title }}
      </a>

  </div>
</template>

<script>
  export default {
    name: 'cLayoutSingle',
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
          section_image: "",
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
