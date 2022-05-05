<template>
  <Bounded as="section" class="bg-white">
    <div class="grid gap-12">
      <Heading v-if="$prismic.asText(slice.primary.heading)" class="text-center">
        {{ $prismic.asText(slice.primary.heading) }}
      </Heading>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <li
          v-for="item in slice.items"
          :key="item.image.url"
          class="grid gap-8"
        >
          <div v-if="item.image.url" class="bg-gray-100">
            <PrismicLink
              v-if="item.buttonLink && ('id' in item.buttonLink || 'url' in item.buttonLink)"
              :field="item.buttonLink"
              class="font-semibold"
              tabindex="-1"
            >
              <PrismicImage :field="item.image" />
            </PrismicLink>
            <PrismicImage v-else :field="item.image" />
          </div>
          <PrismicRichText :field="item.text" class="leading-relaxed" wrapper="div" />
          <div v-if="item.buttonLink && ('id' in item.buttonLink || 'url' in item.buttonLink)">
            <PrismicLink :field="item.buttonLink" class="font-semibold">
              {{ item.buttonText || "More Info" }}
            </PrismicLink>
          </div>
        </li>
      </ul>
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
