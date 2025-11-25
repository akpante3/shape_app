<script setup lang="ts">
import type { Item, Color } from '~/types/filters';

const props = defineProps<{ item: Item }>();

const colorClassMap: Record<Color, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-600',
  yellow: 'bg-yellow-400',
  lightblue: 'bg-sky-300',
  gray: 'bg-gray-500',
};
</script>

<template>
  <div
    class="flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-200 aspect-video"
  >
    <div v-if="item.shape !== 'triangle'" class="flex items-center justify-center">
      <div
        :class="[
          colorClassMap[item.color],
          'block',
          item.shape === 'round' && 'h-20 w-20 rounded-full',
          item.shape === 'oval' && 'h-16 w-24 rounded-full',
          item.shape === 'square' && 'h-20 w-20 rounded-md',
          item.shape === 'rectangle' && 'h-16 w-28 rounded-md',
        ]"
      />
    </div>

    <div
      v-else
      class="h-0 w-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent"
      :class="{
        'border-b-red-500': item.color === 'red',
        'border-b-blue-500': item.color === 'blue',
        'border-b-green-600': item.color === 'green',
        'border-b-yellow-400': item.color === 'yellow',
        'border-b-sky-300': item.color === 'lightblue',
        'border-b-gray-500': item.color === 'gray',
      }"
    />
  </div>
</template>
