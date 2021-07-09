<template>
  <section class='highlight content-section container'>
    <div>
      <prismic-rich-text :field="slice.primary.title"/>
      <prismic-rich-text :field="slice.primary.headline"/>
      <prismic-link :field="slice.primary.link">{{ slice.primary.linkLabel }}</prismic-link>
    </div>
    <div>
      <prismic-image :field="slice.primary.featuredImage"/>
    </div>
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
.highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
}
@media (max-width: 767px) {
  .highlight {
    grid-template-columns: 1fr;
  }
}
</style>
