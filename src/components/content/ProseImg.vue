<template>
  <img
    :src="src"
    class="rounded-lg"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
</script>

<style lang="scss">
img {
  height: auto;
  max-width: 100%;
  margin: 0 auto;
}
</style>
