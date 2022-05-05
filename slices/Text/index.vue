<template>
  <Bounded as="section" class="bg-white leading-relaxed">
    <PrismicRichText
      :field="slice.primary.text"
      :class="{
        'md:columns-2 md:gap-6': slice.variation === 'twoColumns'
      }"
      wrapper="div"
    />
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
