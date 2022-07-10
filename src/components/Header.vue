<template>
  <header class="header">
    <div class="header__container">
      <div class="flex flex-1 items-ceter justify-center lg:justify-start">
        <Skull class="h-9 w-9" />
      </div>

      <Navigation :navigation="navigation" />

      <div class="flex flex-grow items-center justify-end h-full">
        <ThemePicker class="h-5 w-5" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationItem } from './Navigation.vue';

const { data: navigation } = await useAsyncData<NavigationItem[]>(
  'navigation',
  () => fetchContentNavigation()
);
</script>

<style lang="scss" scoped>
.header {
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--rbp-border);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 10;
  height: 4rem;
  width: 100%;

  &__container {
    @apply flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6;
  }
}

.dark .header {
  background-color: rgba(12, 12, 13, 0.95);
}
</style>
