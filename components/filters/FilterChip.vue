
<script setup lang="ts">
const props = defineProps<{
  label: string;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button
    type="button"
    class="px-3 py-1 rounded-full border text-sm transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="
      isActive
        ? 'bg-[#d7d8f0] text-white border-gray-300 focus:ring-blue-500'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 focus:ring-gray-400'
    "
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>
