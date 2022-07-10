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

const { data: tooltip } = useAsyncData<any>(props.href, () =>
  getTooltipByURL(props.href)
);
</script>

<template>
  <WowheadTooltip v-if="tooltip" :tooltip="tooltip">
    <slot />
  </WowheadTooltip>

  <NuxtLink v-else class="test" :href="href">
    <slot />
  </NuxtLink>
</template>
