<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ImageCardsSlice>());
</script>

<template>
  <Bounded
    as="section"
    class="bg-white"
  >
    <div class="grid gap-12">
      <Heading
        v-if="$prismic.isFilled.richText(slice.primary.heading)"
        class="text-center"
      >
        <PrismicText :field="slice.primary.heading" />
      </Heading>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <li
          v-for="card in slice.primary.cards"
          :key="card.image.url ?? undefined"
          class="grid gap-8"
        >
          <div
            v-if="card.image.url"
            class="bg-gray-100"
          >
            <PrismicLink
              v-if="card.buttonLink && ('id' in card.buttonLink || 'url' in card.buttonLink)"
              :field="card.buttonLink"
              class="font-semibold"
              tabindex="-1"
            >
              <PrismicImage :field="card.image" />
            </PrismicLink>
            <PrismicImage
              v-else
              :field="card.image"
            />
          </div>
          <PrismicRichText
            :field="card.text"
            class="leading-relaxed"
            wrapper="div"
          />
          <div v-if="card.buttonLink && ('id' in card.buttonLink || 'url' in card.buttonLink)">
            <PrismicLink
              :field="card.buttonLink"
              class="font-semibold"
            >
              {{ card.buttonText || "More Info" }}
            </PrismicLink>
          </div>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
