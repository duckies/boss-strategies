<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  tabs: {
    type: Array as PropType<{ label: string }[]>,
    required: true,
  },
  activeTabIndex: {
    type: Number,
    required: true,
  },
});

const tabsRef = ref();
const tabSlider = ref();

const updateHighlightUnderlinePosition = () => {
  const activeTab = tabsRef.value[props.activeTabIndex];

  if (!activeTab) return;

  tabSlider.value.style.left = `${activeTab.offsetLeft}px`;
  tabSlider.value.style.top = `${activeTab.offsetTop}px`;
  tabSlider.value.style.width = `${activeTab.clientWidth}px`;
  tabSlider.value.style.height = `${activeTab.clientHeight}px`;
  tabSlider.value.style.transform = 'scale(1)';
  tabSlider.value.style.opacity = 1;
};

const emit = defineEmits<{
  (e: 'update:activeTabIndex', index: number): void;
}>();

const setTabIndex = (index: number) => {
  emit('update:activeTabIndex', index);
  nextTick(() => updateHighlightUnderlinePosition());
};

watch(
  tabsRef,
  (newValue) => {
    if (!newValue) return;

    setTimeout(() => {
      updateHighlightUnderlinePosition();
    }, 50);
  },
  { immediate: true }
);
</script>

<template>
  <div class="tabs-header">
    <div v-if="tabs" class="relative z-0 px-2">
      <button
        v-for="({ label }, i) in tabs"
        ref="tabsRef"
        :key="`${i}${label}`"
        class="tab"
        :class="[activeTabIndex === i && 'active']"
        @click="setTabIndex(i)"
      >
        {{ label }}
      </button>
      <span
        ref="tabSlider"
        class="tab-slider-wrapper"
        :style="{
          transform: 'scale(0)',
          opacity: 0,
        }"
      >
        <span class="tab-slider" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.tabs-header {
  @apply relative bg-gray-800 text-white;
}

.tab {
  @apply xs:py-2 xs:my-0 relative my-2 rounded-lg px-3 py-1.5 font-mono text-sm tracking-tight focus:outline-none;

  &.active {
    @apply text-white;
  }
}

.tab-slider-wrapper {
  transition: left 150ms, top 150ms, width 150ms, height 150ms, transform 100ms,
    opacity 100ms;
  @apply xs:py-1.5 absolute -z-1;
}

.tab-slider {
  @apply flex h-full w-full rounded-lg bg-gray-700 dark:bg-gray-900;
}
</style>
