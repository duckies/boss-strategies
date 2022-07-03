<script setup lang="ts">
const props = defineProps<{ name: string }>();

const { getSpellByName } = useWowhead();
const data = getSpellByName(props.name);
</script>

<template>
  <Tooltip :id="data?.id" :tooltip="data?.tooltip" />
</template>
