<script setup lang="ts">
export interface Source {
  src: string;
  type: string;
}

defineProps<{ sources: Source[] }>();
</script>

<template>
  <video controls class="w-full aspect-auto rounded-md">
    <source v-for="source in sources" :key="source.src" v-bind="source" />
  </video>
</template>
