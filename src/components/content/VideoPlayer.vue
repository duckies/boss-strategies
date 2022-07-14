<script setup lang="ts">
import { PropType } from 'vue';

export interface Source {
  src: string;
  type: string;
}

const props = defineProps({
  poster: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  sources: {
    type: Array as PropType<Source[]>,
    default: () => [],
  },
});

const provider = computed(() => {
  if (props.src?.includes('youtube.com/watch')) {
    const match = props.src.match(/\?v=([^&]*)/);

    return {
      name: 'youtube',
      src: `https://www.youtube-nocookie.com/embed/${match[1]}`,
    };
  }
});

if (!props.src && !props.sources.length) {
  throw new Error(
    'VideoPlayer: You need to provide either `src` or `sources` props'
  );
}
</script>

<template>
  <div class="video-player">
    <!-- Remote -->
    <video v-if="!provider" :poster="poster" controls>
      <source v-if="src" :src="src" />
      <source v-for="source in sources" :key="source.src" v-bind="source" />
    </video>

    <!-- YouTube -->
    <iframe
      v-else-if="provider.name === 'youtube'"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
      class="h-full w-full aspect-video"
      :src="provider.src"
    />
  </div>
</template>

<style lang="scss" scoped>
.video-player {
  position: relative;
  overflow: hidden;
  @apply my-4 w-full rounded-lg bg-black bg-opacity-25 shadow-lg;

  .youtube {
    aspect-ratio: 16/9;
  }
}
</style>
