<script setup lang="ts">
export interface Props {
  title: string;
  description?: string;
  to: string;
  image: string;
}

withDefaults(defineProps<Props>(), {
  image: '/images/question-mark.png',
});

const emit = defineEmits<{ (e: 'click', to: string): void }>();
</script>

<template>
  <Link class="navigation-item" :to="to" @click="emit('click', to)">
    <div class="navigation-item__icon">
      <img :src="image" :alt="title" />
    </div>

    <div class="navigation-item__content">
      <p class="navigation-item__title">{{ title }}</p>
      <p v-if="description" class="navigation-item__description">
        {{ description }}
      </p>
    </div>
  </Link>
</template>

<style lang="scss" scoped>
.navigation-item {
  --at-apply: -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-surface-100 hover:dark:bg-surface-600 border-0 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50;
  color: var(--rbp-text-header);

  &.active {
    --at-apply: bg-opacity-30 bg-primary dark:bg-opacity-60 dark:bg-primary-600 hover:bg-opacity-40 hover:bg-opacity-40;

  }

  &__icon {
    --at-apply: flex rounded-md flex-shrink-0 items-center justify-center text-white sm:h-12 sm:w-12;

    img {
      --at-apply: h-12 w-12;
    }
  }

  &__content {
    --at-apply: text-sm ml-4;

    > p {
      margin: 0;
    }
  }

  &__description {
    --at-apply: text-sm font-normal opacity-85;
    color: var(--rbp-text);
  }
}
</style>
