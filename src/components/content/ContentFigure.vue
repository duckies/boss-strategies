<template>
  <figure>
    <slot />

    <figcaption v-if="$slots.caption">
      <Markdown :use="$slots.caption" unwrap="p" />
    </figcaption>
  </figure>
</template>
