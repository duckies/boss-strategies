<script setup lang="ts">
const visible = ref(false);

const props = defineProps<{
  link: string;
  title: string;
  subtitle?: string;
  unique: string;
}>();

const { getTooltipByURL } = useWowhead();

const {
  data: tooltip,
  pending,
  error,
} = useAsyncData(`${props.link}-${props.title}-mechanic-${unique}`, () =>
  getTooltipByURL(props.link)
);
</script>

<template>
  <Surface v-if="tooltip?.id" class="mechanic rounded-md mb-2">
    <!-- Toggle Header -->
    <div row class="flex p-3 gap-4 items-center" @click="visible = !visible">
      <a
        class="mechanic__image"
        :href="`https://www.wowhead.com/spell=${tooltip.id}`"
        target="_blank"
      >
        <Image
          class="h-12"
          :alt="tooltip.name"
          :src="`https://wow.zamimg.com/images/wow/icons/large/${tooltip.icon}.jpg`"
        />
      </a>

      <span class="mechanic__title font-bold">
        {{ title }}
      </span>

      <div class="mechanic__right">
        <Chip v-if="subtitle" class="mechanic__aside">
          {{ subtitle }}
        </Chip>

        <IconChevronDown
          :class="[visible ? 'rotate-0' : '-rotate-90']"
          class="h-8 w-8 transform transition-transform"
        />
      </div>
    </div>

    <!-- Toggled Body -->
    <div v-show="visible" class="px-4 pb-4">
      <slot />
    </div>
  </Surface>
</template>

<style lang="scss">
.mechanic {
  &__right {
    display: flex;
    margin-left: auto;
    align-items: center;
    @apply gap-1 md:gap-4;
  }

  &__image {
    --at-apply: rounded-xl overflow-hidden shadow-md;
  }

  &__aside {
    @apply shadow-md;
  }
}
.mechanic__title {
  color: var(--rbp-text-header);
}
</style>
