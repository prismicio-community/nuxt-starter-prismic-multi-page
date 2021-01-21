  
<template>
  <section class="container">
    <prismic-rich-text class="content-section" :field="slice.primary.text"/>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>

</style>
