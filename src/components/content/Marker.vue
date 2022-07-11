<template>
  <img
    class="raid-marker"
    :alt="`${icon} Raid Marker`"
    :src="`/images/markers/${icon.toLowerCase()}.png`"
  />
</template>

<script setup lang="ts">
defineProps<{
  icon:
    | 'Skull'
    | 'Cross'
    | 'Circle'
    | 'Star'
    | 'Square'
    | 'Triangle'
    | 'Diamond'
    | 'Moon';
}>();
</script>

<style lang="scss" scoped>
.raid-marker {
  display: inline-block;
  @apply w-6 h-6;
}
</style>
