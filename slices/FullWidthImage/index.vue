<template>
  <section class="bg-white py-12 md:py-16">
    <div class="mx-auto max-w-5xl">
      <PrismicImage :field="slice.primary.image" class="w-full" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "FullWidthImage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
