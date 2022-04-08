<template>
  <Layout :menu="menu">
    <SliceZone :slices="slices" :components="components" />
  </Layout>
</template>

<script>
import { components } from "~/slices";

export default {
  data() {
    return { components };
  },
  async asyncData({ $prismic, params }) {
    const menu = await $prismic.api.getSingle("menu");
    const page = await $prismic.api.getByUID("page", params.uid);

    return {
      menu,
      slices: page.data.body,
    };
  },
};
</script>
