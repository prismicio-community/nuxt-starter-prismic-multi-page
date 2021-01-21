<template>
  <section>
    <slice-zone type="page" :uid="$route.params.uid" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "Homepage",
  components: {
    SliceZone
  }
};
</script>
