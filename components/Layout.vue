<template>
  <div class="text-neutral-700 antialiased">
    <Header :menu="menu" />
    <main><slot /></main>
  </div>
</template>

<script>
export default {
  props: ["menu"],
};
</script>
