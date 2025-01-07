<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextWithImageSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    class="bg-white"
  >
    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <PrismicRichText :field="slice.primary.text" wrapper="div" />
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
