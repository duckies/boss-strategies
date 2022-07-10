<script setup lang="ts">
export interface Link {
  id: string;
  depth: number;
  text: string;
  children: Link[];
}

defineProps<{ links: Link[] }>();
</script>

<template>
  <div class="mb-8">
    <h5 class="items-center mb-2 xl:flex">
      <span class="text-base font-semibold">Table of Contents</span>
    </h5>

    <ul class="font-medium ml-4">
      <li v-for="link in links" :key="link.id">
        <a
          :href="link.id"
          class="block py-1 transition-colors duration-100 transform"
          >{{ link.text }}</a
        >
      </li>
    </ul>
  </div>
</template>
