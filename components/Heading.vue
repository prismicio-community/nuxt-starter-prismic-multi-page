<template>
  <Component
    :is="as"
    class="font-semibold leading-tight tracking-tight md:leading-tight"
    :class="{
      'text-5xl md:text-7xl': size === 'xl',
      'text-4xl md:text-5xl': size === 'lg',
      'text-3xl md:text-4xl': size === 'md',
      'text-xl md:text-2xl': size === 'sm',
    }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'h1'
    },
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
