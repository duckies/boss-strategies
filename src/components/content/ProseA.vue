<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
});

const { getTooltipByURL } = useWowhead();

const { data: tooltip } = useAsyncData<any>(
  `${props.href}-${Math.floor(Math.random() * 100)}`,
  () => getTooltipByURL(props.href)
);
</script>

<template>
  <NuxtLink :href="href">
    <!-- TODO: Figure out hydration issue with `useAsyncData` not running on server here. -->
    <ClientOnly>
      <WowheadIcon v-if="tooltip" :alt="tooltip.name" :icon="tooltip.icon" />
    </ClientOnly>
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>
