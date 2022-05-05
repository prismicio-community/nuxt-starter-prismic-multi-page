<template>
  <Bounded as="section" class="bg-white">
    <figure v-if="$prismic.asText(slice.primary.quote)" class="grid gap-6">
      <blockquote>
        <p
          class="text-4xl font-medium leading-tight md:text-5xl md:leading-tight"
          :class="{
            'text-center': !slice.primary.source
          }"
        >
          <span class="-ml-3.5 select-none text-slate-400 md:-ml-5">&ldquo;</span>{{ $prismic.asText(slice.primary.quote) }}<span class="select-none text-slate-400">&rdquo;</span>
        </p>
      </blockquote>
      <figcaption v-if="slice.primary.source" class="text-right">
        &mdash; {{ slice.primary.source }}
      </figcaption>
    </figure>
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
