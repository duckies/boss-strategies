<template>
  <Popover v-slot="{ open, close }" class="relative">
    <slot name="button" v-bind="{ open }" />

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="panel absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="relative grid gap-8 panel--inner p-7 lg:grid-cols-2">
            <slot v-bind="{ close }" />
          </div>
        </div>
      </PopoverPanel>
    </Transition>

    <div v-if="$slots.footer" class="nav__footer">
      <slot name="footer" v-bind="{ close }" />
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverPanel } from '@headlessui/vue';
</script>

<style lang="scss">
.panel {
  &--inner {
    --at-apply: bg-surface-50 dark:bg-surface-500;
  }
}
</style>
