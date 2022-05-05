<template>
  <Bounded as="section" class="bg-white">
    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <PrismicRichText :field="slice.primary.text" />
      <div>
        <div v-if="slice.primary.image.url" class="bg-gray-100">
          <PrismicImage :field="slice.primary.image" />
        </div>
      </div>
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
