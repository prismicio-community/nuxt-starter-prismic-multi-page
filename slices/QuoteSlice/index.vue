<template>
  <section class="bg-white px-8 py-12 md:py-16">
    <figure class="mx-auto grid max-w-5xl gap-4">
      <blockquote
        class="text-center font-serif text-3xl italic leading-relaxed md:text-4xl md:leading-relaxed"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none select-none text-5xl text-neutral-200"
          >&ldquo;</span
        ><PrismicText :field="slice.primary.quotetext" wrapper="span" /><span
          aria-hidden="true"
          class="pointer-events-none select-none text-5xl text-neutral-200"
          >&rdquo;</span
        >
      </blockquote>
      <figcaption
        v-if="slice.variation === 'quoteReference'"
        class="text-right text-neutral-400"
      >
        <span aria-hidden="true">&mdash;</span
        ><PrismicText :field="slice.primary.reference" wrapper="cite" />
      </figcaption>
    </figure>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "QuoteSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
