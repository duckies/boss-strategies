<script setup lang="ts">
export interface NavigationMeta {
  title?: string;
  description?: string;
  icon?: string;
}

export interface NavigationItem {
  title: string;
  _path: string;
  navigation?: NavigationMeta;
  children?: NavigationItem[];
}

export interface NavigationNormalized {
  title: string;
  description?: string;
  to: string;
  image?: string;
  children?: NavigationNormalized[];
}

const route = useRoute();

const props = defineProps<{ navigation: NavigationItem[] }>();

const navigation = computed(() => {
  const items: NavigationNormalized[] = [];

  for (const rootItem of props.navigation) {
    const item: NavigationNormalized = {
      title: rootItem.navigation.title || rootItem.title,
      to: rootItem._path,
      children: [],
    };

    if (rootItem.children?.length) {
      for (const childItem of rootItem.children) {
        if (childItem._path === rootItem._path) {
          item.description = childItem.navigation?.description;
          item.image = childItem.navigation?.icon;
        } else {
          item.children.push({
            title: childItem.navigation?.title || childItem.title,
            description: childItem.navigation?.description,
            to: childItem._path,
            image: childItem.navigation?.icon || item.image,
          });
        }
      }
    }

    items.push(item);
  }

  return items;
});
</script>

<template>
  <nav class="nav">
    <template v-for="item in navigation" :key="item.to">
      <Link v-if="!item.children?.length" class="nav__item" :to="item.to">
        {{ item.title }}
      </Link>

      <PopoverMenu v-else>
        <template #button>
          <PopoverButton
            :class="[route.path.startsWith(item.to) && 'active']"
            class="nav__item nav__dropdown"
          >
            {{ item.title }}
            <IconChevronDown class="h-5 w-5" aria-hidden="true" />
          </PopoverButton>
        </template>

        <template #default="{ close }">
          <NavigationItem
            v-for="child in item.children"
            :key="child.to"
            :class="[child.to === route.path && 'hidden']"
            v-bind="child"
            @click="close"
          />
        </template>

        <!-- <template #footer="{ close }"> <NavigationItem </template> -->
      </PopoverMenu>
    </template>
  </nav>
</template>

<style lang="scss">
.nav {
  --at-apply: flex items-center justify-center gap-3;

  &__item {
    font-weight: 500;
    color: inherit;

    &.active {
      color: var(--rbp-link);
    }
  }

  &__dropdown {
    --at-apply: inline-flex items-center;
  }

  &__footer {
    --at-apply: p-4;
  }
}
</style>
