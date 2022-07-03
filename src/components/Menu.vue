<template>
  <div ref="referenceRef" tabindex="0" @keydown.escape="hide">
    <div class="flex items-center w-full">
      <slot name="trigger" v-bind="{ show, hide, toggle }" />
    </div>

    <div v-show="visible" ref="tooltipRef" class="z-30 rounded-md shadow-lg">
      <div class="overflow-y-auto rounded-md divide-y py-1" role="menu">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const referenceRef = ref();
const tooltipRef = ref();

const { show, hide, toggle, visible } = usePopper(referenceRef, tooltipRef, {
  placement: 'bottom-end',
});
</script>
