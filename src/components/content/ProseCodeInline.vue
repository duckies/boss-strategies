<template>
  <code><slot /></code>
</template>

<style lang="scss" scoped>
code {
  background-color: rgb(250, 250, 250);
  color: rgb(24, 24, 27);
  padding: 3px 6px;
  border-radius: 0.375rem;
}

.dark code {
  background-color: rgb(24, 24, 27);
  color: rgb(250, 250, 250);
}
</style>
