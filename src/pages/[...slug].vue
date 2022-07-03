<template>
  <main class="text-base prose">
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const { getCache } = useWowhead();
const logger = useLogger('Page');
const { path } = useRoute();

const { data: cache, error } = useAsyncData(`content-${path}`, async () => {
  logger.info('Test');
  const meta = await queryContent<{ spells?: number[] }>()
    .where({ _path: path })
    .only('spells')
    .findOne();

  if (!meta.spells) {
    logger.info('No spells to cache.');
    return;
  }

  return getCache(meta.spells);
});
</script>
