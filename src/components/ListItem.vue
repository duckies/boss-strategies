<script setup lang="ts">
defineProps<{ to?: string }>();
</script>

<template>
  <div class="min-h-10 p-2">
    <Link v-if="to" :to="to">
      <slot />
    </Link>

    <slot v-else />
  </div>
</template>
