// utils/gridTitle.ts
import type { Shape, Color } from '~/types/filters';
import {
  ALL_COLORS,
  ALL_SHAPES,
  COLOR_LABELS,
  SHAPE_LABELS,
} from '~/types/filters';

export function getGridTitle(
  selectedShapes: Shape[],
  selectedColors: Color[],
): string {
  const allShapesSelected = selectedShapes.length === ALL_SHAPES.length;
  const allColorsSelected = selectedColors.length === ALL_COLORS.length;

  const singleShape = selectedShapes.length === 1;
  const singleColor = selectedColors.length === 1;

  const multipleShapes = selectedShapes.length > 1 && !allShapesSelected;
  const multipleColors = selectedColors.length > 1 && !allColorsSelected;

  const shapeLabel = singleShape ? SHAPE_LABELS[selectedShapes[0]] : '';
  const colorLabel = singleColor ? COLOR_LABELS[selectedColors[0]] : '';

  // 1. all colors & all shapes
  if (allShapesSelected && allColorsSelected) return 'All items:';

  // 2. all colors & multiple shapes OR all shapes & multiple colors
  if (
    (allColorsSelected && multipleShapes) ||
    (allShapesSelected && multipleColors)
  ) {
    return 'Multiple items:';
  }

  // 3. all shapes & a single color
  if (allShapesSelected && singleColor) {
    return `All ${colorLabel.toLowerCase()} items:`;
  }

  // 4. all colors & a single shape
  if (allColorsSelected && singleShape) {
    return `All ${shapeLabel} items:`;
  }

  // 5. multiple shapes & a single color
  if (multipleShapes && singleColor) {
    return `Multiple ${colorLabel.toLowerCase()} items:`;
  }

  // 6. multiple colors & a single shape
  if (multipleColors && singleShape) {
    return `Multiple ${shapeLabel} items:`;
  }

  // 7. single color & single shape
  return `${COLOR_LABELS[selectedColors[0]]} ${shapeLabel} items:`;
}
