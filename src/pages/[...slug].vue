<template>
  <main class="px-4 sm:px-6 mx-auto max-w-full lg:max-w-5xl h-full pb-6">
    <ContentDoc v-slot="{ doc }">
      <div>
        <div class="py-10 sm:py-20">
          <div
            class="px-4 sm:px-6 lg:px-8 flex flex-col gap-y-8 items-center justify-center text-center"
          >
            <h1 class="text-5xl">{{ doc.title }}</h1>
            <p v-if="doc.description" class="font-medium m-0 max-w-5xl">
              {{ doc.description }}
            </p>
          </div>
        </div>

        <ContentRenderer :value="doc" class="content" />
      </div>
    </ContentDoc>
  </main>
</template>

<style lang="scss">
.content > :first-child {
  margin-top: 0;
}
</style>
