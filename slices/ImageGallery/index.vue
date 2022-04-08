<template>
  <section class="bg-white px-6 py-12 md:py-16">
    <div class="mx-auto max-w-5xl">
      <PrismicText
        :field="slice.primary.galleryTitle"
        wrapper="h2"
        class="mb-4 text-3xl font-bold leading-snug"
      />
      <div class="grid grid-cols-2 gap-y-8 gap-x-5 md:gap-x-8">
        <div
          v-for="item in slice.items"
          v-bind:key="$prismic.asText(item.itemTitle)"
          class="grid gap-4 md:gap-6"
        >
          <PrismicImage :field="item.image" class="w-full" />
          <PrismicRichText
            :field="item.imageDescription"
            class="leading-relaxed text-neutral-600"
          />
          <p v-if="item.link.url || item.link.id">
            <PrismicLink :field="item.link" class="underline">
              {{ item.linkLabel }}
            </PrismicLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ImageGallery",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
