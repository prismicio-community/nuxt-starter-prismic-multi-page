<template>
  <Bounded
    as="section"
    class="bg-white"
    :class="{
      'pt-0 md:pt-0': index === 0
    }"
  >
    <div v-if="slice.primary.image.url" class="bg-gray-100">
      <PrismicImage :field="slice.primary.image" />
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
