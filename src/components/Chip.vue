<template>
  <span class="chip">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.chip {
  border-radius: 9999px;
  @apply items-center inline-flex text-sm px-3 h-8 align-middle bg-primary bg-opacity-40 border-2 border-primary border-opacity-40;
}
</style>
