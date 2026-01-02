<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.TextWithImageSlice>());
</script>

<template>
  <Bounded
    as="section"
    class="bg-white"
  >
    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div>
        <PrismicRichText :field="slice.primary.text" />
      </div>
      <div>
        <div
          v-if="slice.primary.image.url"
          class="bg-gray-100"
        >
          <PrismicImage :field="slice.primary.image" />
        </div>
      </div>
    </div>
  </Bounded>
</template>
