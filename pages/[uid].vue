<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('page', route.params.uid as string || 'home')
)
const settings = useSettings()

useHead({
  title: computed(() => `${prismic.asText(page.value?.data.title)} | ${prismic.asText(settings.value?.data.siteTitle)}`)
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
