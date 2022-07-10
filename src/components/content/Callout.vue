<script setup lang="ts">
defineProps<{ icon: string }>();
</script>

<template>
  <div class="p-4 my-4 rounded-lg text-sm leading-relaxed bg-purple-800">
    <div class="flex items-start">
      <span
        v-if="icon"
        class="inline-flex mr-2 w-5 h-5 justify-center items-center text-1.2rem"
      >
        {{ icon }}
      </span>
      <div class="flex-grow">
        <Markdown :use="$slots.default" unwrap="p" />
      </div>
    </div>
  </div>
</template>
