<template>
  <SliceSimulator :state="state" #default="{ slices }">
    <SliceZone :slices="slices" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from "@prismicio/slice-simulator-vue";
import SliceZone from "vue-slicezone";

import state from "~~/.slicemachine/libraries-state.json";

export default {
  components: {
    SliceSimulator,
    SliceZone
  },
  data() {
    return { state };
  }
}
</script>
