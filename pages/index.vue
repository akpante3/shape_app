<script setup lang="ts">
import ShapeGrid from '~/components/grid/ShapeGrid.vue';
import ShapeFilterGroup from '~/components/filters/ShapeFilterGroup.vue';
import ColorFilterGroup from '~/components/filters/ColorFilterGroup.vue';
import TopBar from '~/components/TopBar.vue';
import { useFilters } from '~/composables/useFilters';

const {
  selectedShapes,
  selectedColors,
  toggleShape,
  toggleColor,
  filteredItems,
  gridTitle,
} = useFilters();
</script>

<template>
  <TopBar />
  <div class="min-h-screen flex flex-col bg-gray-100">

    <main class="flex-1 px-4 sm:px-8 py-6">
      <section class="max-w-6xl mx-auto bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 class="text-lg font-semibold mb-4 text-gray-800">
          Filters
        </h2>

        <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
          <ShapeFilterGroup :selected-shapes="selectedShapes" @toggle="toggleShape" />

          <ColorFilterGroup :selected-colors="selectedColors" @toggle="toggleColor" />
        </div>

        <ShapeGrid class="mt-8" :title="gridTitle" :items="filteredItems" />
      </section>
    </main>
  </div>
</template>
