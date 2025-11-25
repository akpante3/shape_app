<script setup lang="ts">
import { ALL_SHAPES, SHAPE_LABELS, type Shape } from '~/types/filters';

const props = defineProps<{ selectedShapes: Shape[] }>();
const emit = defineEmits<{ (e: 'toggle', shape: Shape): void }>();

const isSelected = (shape: Shape) => props.selectedShapes.includes(shape);
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-semibold text-gray-800">Shapes</p>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="shape in ALL_SHAPES"
        :key="shape"
        type="button"
        class="px-3 py-1 rounded-full text-sm transition border"
        :class="
          isSelected(shape)
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300'
        "
        @click="emit('toggle', shape)"
      >
        {{ SHAPE_LABELS[shape] }}
      </button>
    </div>
  </div>
</template>
