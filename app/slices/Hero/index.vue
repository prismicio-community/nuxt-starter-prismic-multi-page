<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { VueRichTextSerializer } from '@prismicio/vue'
import Heading1 from '~/slices/Hero/Heading1.vue';

defineProps(getSliceComponentProps<Content.HeroSlice>());
const prismic = usePrismic()

const components: VueRichTextSerializer = {
  ...prismic.options.components?.richTextComponents,
  heading1: Heading1,
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
        <PrismicRichText
          :field="slice.primary.text"
          :components="components"
          class="max-w-2xl text-center"
          wrapper="div"
        />
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
