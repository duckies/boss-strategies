<script setup lang="ts">
defineProps<{ to?: string }>();
</script>

<template>
  <Link class="list-item" v-if="to" :to="to">
    <slot />
  </Link>

  <slot class="list-item" v-else />
</template>

<style lang="scss" scoped>
.list-item {
  @apply px-2 font-medium;
}
</style>
