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

  if (allShapesSelected && allColorsSelected) return 'All items:';

  if (
    (allColorsSelected && multipleShapes) ||
    (allShapesSelected && multipleColors)
  ) {
    return 'Multiple items:';
  }

  if (allShapesSelected && singleColor) {
    return `All ${colorLabel.toLowerCase()} items:`;
  }

  if (allColorsSelected && singleShape) {
    return `All ${shapeLabel} items:`;
  }

  if (multipleShapes && singleColor) {
    return `Multiple ${colorLabel.toLowerCase()} items:`;
  }

  if (multipleColors && singleShape) {
    return `Multiple ${shapeLabel} items:`;
  }


  return `${COLOR_LABELS[selectedColors[0]]} ${shapeLabel} items:`;
}
