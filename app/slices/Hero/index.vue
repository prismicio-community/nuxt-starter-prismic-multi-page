<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { RichTextComponents } from '@prismicio/vue'
import defaultComponents from '~/prismic/richTextComponents';

defineProps(getSliceComponentProps<Content.HeroSlice>());

const components: RichTextComponents = {
  ...defaultComponents,
  heading1: {
    as: 'h2',
    class: 'font-semibold leading-tight tracking-tight md:leading-tight text-5xl md:text-7xl mb-4 mt-12 first:mt-0 last:mb-0'
  },
}
</script>

<template>
  <section class="relative bg-slate-900 text-white">
    <figure class="absolute inset-0">
      <PrismicImage
        v-if="slice.primary.backgroundImage.url"
        :field="slice.primary.backgroundImage"
        class="pointer-events-none select-none object-cover opacity-40 h-full w-full"
      />
    </figure>
    <Bounded
      y-padding="lg"
      class="relative"
    >
      <div class="grid justify-items-center gap-8">
        <div class="max-w-2xl text-center">
          <PrismicRichText :field="slice.primary.text" :components="components" />
        </div>
        <PrismicLink
          v-if="slice.primary.buttonLink && ('id' in slice.primary.buttonLink || 'url' in slice.primary.buttonLink)"
          :field="slice.primary.buttonLink"
          class="rounded bg-white px-5 py-3 font-medium text-slate-800"
        >
          {{ slice.primary.buttonText || "Learn More" }}
        </PrismicLink>
      </div>
    </Bounded>
  </section>
</template>
