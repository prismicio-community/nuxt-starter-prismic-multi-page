<script setup lang="ts">
import { asText } from '@prismicio/client'
import { components } from '~/slices'

const { client } = usePrismic()
const route = useRoute()
const { data: page } = await useAsyncData(route.params.uid as string, () =>
  client.getByUID('page', route.params.uid as string || 'home')
)
const settings = useSettings()

useHead({
  title: computed(() => `${asText(page.value?.data.title)} | ${asText(settings.value?.data.siteTitle)}`)
})
</script>


<template>
  <main>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
