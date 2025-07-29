<script setup lang="ts">
defineProps(getRichTextComponentProps("hyperlink"));
</script>

<template>
  <a :href="node.data.url" class="underline decoration-1 underline-offset-2">
    <slot />
  </a>
</template>
