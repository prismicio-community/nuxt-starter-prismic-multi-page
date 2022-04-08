<template>
  <section class="relative bg-neutral-600 text-white">
    <div class="pointer-events-none absolute inset-0">
      <PrismicImage
        :field="slice.primary.background"
        class="select-none w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"
      />
    </div>
    <div
      class="relative grid w-full justify-items-center gap-6 px-6 py-40 text-center"
    >
      <PrismicText
        :field="slice.primary.title"
        wrapper="h2"
        class="text-5xl font-black md:text-7xl"
      />
      <PrismicRichText
        :field="slice.primary.description"
        class="max-w-lg leading-relaxed md:text-lg"
      />
      <PrismicLink
        :field="slice.primary.link"
        class="rounded-md bg-white px-10 py-2 font-bold text-neutral-700 transition hover:bg-neutral-300"
      >
        {{ slice.primary.linkLabel }}
      </PrismicLink>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "BannerSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
