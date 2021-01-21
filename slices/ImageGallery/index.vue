<template>
  <section class='image-gallery content-section container'>
    <prismic-rich-text :field="slice.primary.galleryTitle"/>
    <div class="gallery">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="gallery-item">
        <prismic-image :field="item.image"/>
        <prismic-rich-text :field="item.imageDescription"/>
        <p>
          <prismic-link :field="item.link" class="gallery-link">{{ item.linkLabel }}</prismic-link>
        </p>
      </div>
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
      }
    }
  },
}
</script>
<style scoped>
.gallery {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.gallery-item {
  -webkit-box-flex: 0 1 48%;
  -moz-box-flex: 0 1 48%;
  -webkit-flex: 0 1 48%;
  -ms-flex: 0 1 48%;
  flex: 0 1 48%;
}

.gallery-link {
  margin-top: -20px;
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .content-section {
    margin-bottom: 2rem;
  }

  .gallery-item {
    -webkit-box-flex: 100%;
    -moz-box-flex: 100%;
    -webkit-flex: 100%;
    -ms-flex: 100%;
    flex: 100%;
  }
}
</style>
