<script setup lang="ts">
import { asText } from '@prismicio/client'
import { components } from '~/slices'

const { client } = usePrismic()
const { data: page } = await useAsyncData('index', () =>
  client.getByUID('page', 'home')
)

useHead({
  title: computed(() => asText(page.value?.data.title))
})
</script>


<template>
  <main>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
