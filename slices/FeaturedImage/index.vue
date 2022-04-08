<template>
  <section class="bg-white px-6 py-12 md:py-16">
    <div
      class="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2 md:gap-12"
    >
      <div class="grid gap-2 md:gap-4">
        <PrismicText
          :field="slice.primary.title"
          wrapper="h2"
          class="text-3xl font-bold leading-snug"
        />
        <PrismicText
          :field="slice.primary.headline"
          wrapper="h3"
          class="leading-relaxed text-neutral-600"
        />
        <p>
          <PrismicLink :field="slice.primary.link" class="underline">
            {{ slice.primary.linkLabel }}
          </PrismicLink>
        </p>
      </div>
      <div>
        <PrismicImage :field="slice.primary.featuredImage" class="w-full" />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "FeaturedImage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
