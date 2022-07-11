<script setup lang="ts">
defineProps<{
  alt: string;
  icon: string;
}>();
</script>

<template>
  <img
    class="relative -top-0.5 inline-block mr-0.5 h-5 w-5 rounded-sm"
    :alt="alt"
    :src="`https://wow.zamimg.com/images/wow/icons/small/${icon}.jpg`"
  />
</template>
