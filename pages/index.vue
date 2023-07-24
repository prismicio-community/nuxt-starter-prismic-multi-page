<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home')
)

useHead({
  title: computed(() => prismic.asText(page.value?.data.title))
})

useSeoMeta({
  ogTitle: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogImage: page.value?.data.meta_image.url,
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
