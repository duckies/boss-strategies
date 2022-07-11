<template>
  <slot />
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
});
</script>

<style>
pre {
  background-color: rgb(24, 24, 27);
  color: rgb(250 250 250);
  display: flex;
  flex: 1 1 0%;
  line-height: 1.625;
  padding: 1rem;
}

pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
