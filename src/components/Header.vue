<template>
  <header class="sticky top-0 z-50 h-12 backdrop-filter backdrop-blur-md">
    <div
      class="flex items-center justify-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6"
    >
      <Navigation :navigation="navigation" />
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
