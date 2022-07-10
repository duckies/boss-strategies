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
  @apply bg-surface-50 dark:bg-surface-500 shadow-md;
}
</style>
