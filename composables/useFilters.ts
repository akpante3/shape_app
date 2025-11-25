import { computed, ref } from 'vue';
import { items } from '../data/item';
import {
  ALL_SHAPES,
  ALL_COLORS,
  type Shape,
  type Color,
} from '~/types/filters';
import { getGridTitle } from '~/utils/gridTitle';

const createToggle =
  <T>(ALL: readonly T[]) =>
  (selected: T[], value: T): T[] => {
    const isAllSelected = selected.length === ALL.length;
    const exists = selected.includes(value);

    if (isAllSelected) {
      return [value];
    }

    if (exists) {

      if (selected.length === 1) {
        return [...ALL];
      }

      return selected.filter((item) => item !== value);
    }

    return [...selected, value];
  };

export const useFilters = () => {
  const selectedShapes = ref<Shape[]>([...ALL_SHAPES]);
  const selectedColors = ref<Color[]>([...ALL_COLORS]);

  const toggleShapeCore = createToggle<Shape>(ALL_SHAPES);
  const toggleColorCore = createToggle<Color>(ALL_COLORS);

  const toggleShape = (shape: Shape) => {
    selectedShapes.value = toggleShapeCore(selectedShapes.value, shape);
  };

  const toggleColor = (color: Color) => {
    selectedColors.value = toggleColorCore(selectedColors.value, color);
  };

  const filteredItems = computed(() =>
    items.filter(
      (item) =>
        selectedShapes.value.includes(item.shape) &&
        selectedColors.value.includes(item.color),
    ),
  );

  const gridTitle = computed(() =>
    getGridTitle(selectedShapes.value, selectedColors.value),
  );

  return {
    selectedShapes,
    selectedColors,
    toggleShape,
    toggleColor,
    filteredItems,
    gridTitle,
  };
};
