<template>
  <section class="bg-white px-6 py-12 md:py-16">
    <div
      class="mx-auto max-w-5xl leading-relaxed"
      :class="{
        'columns-2': slice.variation === 'twoColumn',
      }"
    >
      <PrismicRichText
        :field="slice.primary.text"
        :htmlSerializer="htmlSerializer"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TextSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  methods: {
    htmlSerializer(type, _element, _content, children) {
      const stringifiedChildren = children.join("");

      switch (type) {
        case "heading1": {
          return `<h2 class="text-tight mb-5 text-4xl font-bold leading-snug last:mb-0 md:text-5xl">${stringifiedChildren}</h2>`;
        }

        case "heading2": {
          return `<h3 class="text-tight mb-5 text-3xl font-bold leading-snug last:mb-0">${stringifiedChildren}</h3>`;
        }

        case "paragraph": {
          return `<p class="mb-5 text-neutral-600 last:mb-0">${stringifiedChildren}</p>`;
        }

        case "oList": {
          return `<ol class="mb-5 pl-4 last:mb-0 md:pl-6">${stringifiedChildren}</ol>`;
        }

        case "oListItem": {
          return `<li class="mb-5 pl-4 last:mb-0 md:pl-6">${stringifiedChildren}</li>`;
        }

        case "list": {
          return `<ul class="mb-5 pl-4 last:mb-0 md:pl-6">${stringifiedChildren}</ul>`;
        }

        case "listItem": {
          return `<li class="mb-7 pl-4 last:mb-0 md:pl-6">${stringifiedChildren}</li>`;
        }

        case "strong": {
          return `<strong class="font-bold">${stringifiedChildren}</strong>`;
        }
      }
    },
  },
};
</script>
