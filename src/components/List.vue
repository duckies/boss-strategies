<template>
  <div class="list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.list {
  @apply relative p-2 overflow-auto shadow-md;
}
</style>
