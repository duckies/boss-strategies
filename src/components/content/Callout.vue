<script setup lang="ts">
export interface Props {
  icon: string;
  type?: 'info' | 'warning' | 'error';
}

withDefaults(defineProps<Props>(), { type: 'info' });
</script>

<template>
  <div class="callout" :class="type">
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

<style lang="scss" scoped>
.callout {
  @apply text-sm rounded-xl px-4 py-3 my-4 border-1 border-solid leading-relaxed;

  &.warning {
    background-color: rgb(253, 246, 219);
    border-color: rgb(252, 237, 183);
    color: rgb(218, 172, 10);
  }

  &.info {
    background-color: rgb(217, 241, 255);
    border-color: rgb(179, 228, 255);
    color: rgb(0, 144, 255);
  }
}

.dark .callout {
  &.warning {
    --tw-text-opacity: 1;
    background-color: rgb(109, 86, 5, 0.25);
    border-color: rgb(54 43 3);
    color: rgb(252, 237, 183);
  }

  &.info {
    background-color: rgb(0, 72, 112, 0.25);
    border-color: rgb(0, 36, 56);
    color: rgb(141, 214, 255);
  }
}
</style>
