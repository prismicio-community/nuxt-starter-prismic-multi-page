<template>
  <div class="text-slate-800">
    <Header
      v-if="navigation.data && settings.data"
      :navigation="navigation"
      :settings="settings"
    />
    <main><nuxt /></main>
  </div>
</template>

<script>
export default {
  computed: {
    navigation () {
      return this.$store.state.prismic.navigation
    },
    settings () {
      return this.$store.state.prismic.settings
    }
  }
}
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}
</style>
