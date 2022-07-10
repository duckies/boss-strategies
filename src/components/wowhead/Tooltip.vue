<script setup lang="ts">
import type { Tooltip } from '~/composables/useWowhead';

defineProps<{ tooltip: Tooltip }>();
</script>

<template>
  <NuxtLink :to="`https://www.wowhead.com/${tooltip.type}=${tooltip.id}`">
    <WowheadIcon :alt="tooltip.name" :icon="tooltip.icon" />
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>
