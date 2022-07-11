<template>
  <img
    :src="src"
    class="w-auto m-auto h-full rounded-lg"
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
