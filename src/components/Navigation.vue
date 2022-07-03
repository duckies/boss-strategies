<script setup lang="ts">
export interface NavigationItem {
  title: string;
  _path: string;
  navTitle?: string;
  children?: NavigationItem[];
}

defineProps<{ navigation: NavigationItem[] }>();
</script>

<template>
  <nav class="flex items-center justify-center gap-4">
    <template v-for="item in navigation" :key="item._path">
      <Link v-if="!item.children" :to="item._path">
        {{ item.navTitle || item.title }}
      </Link>

      <Menu v-else>
        <template #trigger="{ toggle }">
          <button class="font-medium px-2 py-1" @click="toggle">
            {{ item.navTitle || item.title }}
            <IconChevronDown class="h-5 w-5 inline-flex" />
          </button>
        </template>

        <div class="">
          <List>
            <ListItem
              v-for="child in item.children"
              :key="child._path"
              :to="child._path"
            >
              {{ child.navTitle || child.title }}
            </ListItem>
          </List>
        </div>
      </Menu>
    </template>
  </nav>
</template>
