<script setup lang="ts">
import IconMoon from '~/components/icon/Moon.vue';
import IconSun from '~/components/icon/Sun.vue';

const theme = useColorMode();

const isDark = $computed(() => theme.preference === 'dark');
const icon = computed(() => (isDark ? IconSun : IconMoon));

function toggle() {
  theme.preference = isDark ? 'light' : 'dark';
}
</script>

<template>
  <Component :is="icon" @click="toggle" />
</template>
