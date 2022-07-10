<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: 'div',
  },
});
</script>

<template>
  <Component :is="as" class="surface">
    <slot />
  </Component>
</template>

<style scoped>
.surface {
  background-color: var(--rbp-surface);
}
</style>
