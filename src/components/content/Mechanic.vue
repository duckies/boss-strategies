<script setup lang="ts">
const visible = ref(false);

const props = defineProps<{
  name: string;
}>();

const data = useWowhead().getSpellByName(props.name);
</script>

<template>
  <div class="bg-dark-600 rounded-md mb-2">
    <!-- Toggle Header -->
    <div class="flex p-4 gap-4 items-center" @click="visible = !visible">
      <a :href="`https://www.wowhead.com/spell=${data.id}`" target="_blank">
        <Image
          class="h-12 border-2 border-black"
          :src="`https://wow.zamimg.com/images/wow/icons/large/${data.tooltip.icon}.jpg`"
        />
      </a>

      <span class="font-bold text-size-6 cursor-pointer">
        {{ name }}
      </span>

      <div class="ml-auto">
        <IconChevronDown
          :class="[visible ? '-rotate-180' : 'rotate-0', 'h-8 w-8 transform']"
        />
      </div>
    </div>

    <!-- Toggled Body -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-x-3 opacity-0 h-0"
      enter-to-class="transform translate-x-0 opacity-100 h-full"
      leave-active-class="transition duration-300 ease-out"
      leave-from-class="transform translate-x-0 opacity-100 h-full"
      leave-to-class="transform -translate-x-3 opacity-0 h-0"
    >
      <div v-show="visible" class="px-4 pb-4">
        <slot />
      </div>
    </Transition>
  </div>
</template>
