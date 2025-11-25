<script setup lang="ts">
import type { Item } from '~/types/filters';
import ShapeCard from '~/components/grid/ShapeCard.vue';

const props = defineProps<{
  title: string;
  items: Item[];
}>();
</script>

<template>
  <section class="mt-6">
    <header class="flex items-baseline gap-2 mb-4">
      <h2 class="text-lg font-semibold text-gray-800">
        {{ title }}
      </h2>
      <span class="text-xs text-gray-500">
        ({{ items.length }})
      </span>
    </header>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ShapeCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
