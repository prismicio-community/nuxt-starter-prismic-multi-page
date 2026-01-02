<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.TextSlice>());
</script>

<template>
  <Bounded
    as="section"
    class="bg-white leading-relaxed"
  >
    <div
      :class="{
        'md:columns-2 md:gap-6': slice.variation === 'twoColumns'
      }"
    >
      <PrismicRichText :field="slice.primary.text" />
    </div>
  </Bounded>
</template>
