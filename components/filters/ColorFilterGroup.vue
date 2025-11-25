<script setup lang="ts">
import type { Color } from '~/types/filters';
import { ALL_COLORS, COLOR_LABELS } from '~/types/filters';

const props = defineProps<{
  selectedColors: Color[];
}>();

const emit = defineEmits<{
  (e: 'toggle', color: Color): void;
}>();

const isSelected = (color: Color) => props.selectedColors.includes(color);

const colorClasses: Record<Color, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-600',
  yellow: 'bg-yellow-400',
  lightblue: 'bg-sky-300',
  gray: 'bg-gray-500',
};
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-semibold text-gray-800">Colors</p>
    <div class="flex flex-wrap gap-3 items-center">
      <button
        v-for="color in ALL_COLORS"
        :key="color"
        type="button"
        class="relative h-8 w-8 rounded-full shadow-md border-2 transition focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class="[
          colorClasses[color],
          isSelected(color) ? 'ring-2 ring-blue-500 ring-offset-2' : 'border-gray-200',
        ]"
        :aria-pressed="isSelected(color)"
        :aria-label="COLOR_LABELS[color]"
        @click="emit('toggle', color)"
      >
        <span class="sr-only">
          {{ COLOR_LABELS[color] }}
        </span>
      </button>
    </div>
  </div>
</template>
