<template>
  <span class="chip">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.chip {
  border-radius: 9999px;
  @apply items-center inline-flex text-sm px-3 h-8 align-middle bg-primary-600 bg-opacity-70;
}
</style>
