<template>
  <div>
    <header-prismic/>
    <nuxt />
  </div>
</template>

<script>
import HeaderPrismic from '~/components/HeaderPrismic.vue'

export default {
  components: {
    HeaderPrismic
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  }
}
</script>
