<script setup lang="ts">
import type { Tooltip } from '~/composables/useWowhead';

defineProps<{ id: number | string; tooltip: Tooltip }>();
</script>

<template>
  <span v-if="!tooltip">Missing Data</span>
  <span v-else>
    <a :href="`https://www.wowhead.com/spell=${id}`">
      <Image
        class="relative -top-0.5 inline-block mr-0.5 h-5 w-5 rounded-sm"
        :src="`https://wow.zamimg.com/images/wow/icons/small/${tooltip.icon}.jpg`"
      />
      <span>{{ tooltip.name }}</span>
    </a>
  </span>
</template>
