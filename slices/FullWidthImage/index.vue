<template>
  <section class='content-section container'>
    <prismic-image :field="slice.primary.image"/>
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
@media (max-width: 767px) {
  .content-section {
    margin-bottom: 2rem;
  }
}
</style>