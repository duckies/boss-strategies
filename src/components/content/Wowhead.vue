<script setup lang="ts">
const props = defineProps<{ spell: number | string }>();

const { getSpell } = useWowhead();

const { data: tooltip } = useAsyncData(`spell-${props.spell}`, () =>
  getSpell(props.spell)
);
</script>

<template>
  <Tooltip :id="props.spell" :tooltip="tooltip" />
</template>
