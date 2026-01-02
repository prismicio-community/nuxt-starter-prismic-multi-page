<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ImageSlice>());
</script>

<template>
  <Bounded
    as="section"
    class="bg-white"
    :class="{
      'pt-0 md:pt-0': index === 0
    }"
  >
    <div
      v-if="slice.primary.image.url"
      class="bg-gray-100"
    >
      <PrismicImage :field="slice.primary.image" />
    </div>
  </Bounded>
</template>
