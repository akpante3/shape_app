import { describe, it, expect, beforeEach } from 'vitest';
import { useFilters } from '~/composables/useFilters';
import {
  ALL_COLORS,
  ALL_SHAPES,
  type Color,
  type Shape,
} from '~/types/filters';

describe('useFilters composable', () => {
  const init = () => useFilters();

  it('starts with all shapes and colors selected', () => {
    const { selectedShapes, selectedColors } = init();

    expect(selectedShapes.value).toEqual(ALL_SHAPES);
    expect(selectedColors.value).toEqual(ALL_COLORS);
  });

  it('clicking a color from "all" selects only that color', () => {
    const { selectedColors, toggleColor } = init();
    const red: Color = 'red';

    toggleColor(red);

    expect(selectedColors.value).toEqual([red]);
  });

  it('clicking a shape from "all" selects only that shape', () => {
    const { selectedShapes, toggleShape } = init();
    const rectangle: Shape = 'rectangle';

    toggleShape(rectangle);

    expect(selectedShapes.value).toEqual([rectangle]);
  });

  it('clicking additional colors adds them (multi-select)', () => {
    const { selectedColors, toggleColor } = init();
    const red: Color = 'red';
    const blue: Color = 'blue';

    toggleColor(red);
    toggleColor(blue);

    expect(selectedColors.value.sort()).toEqual([red, blue].sort());
  });

  it('clicking additional shapes adds them (multi-select)', () => {
    const { selectedShapes, toggleShape } = init();
    const oval: Shape = 'oval';
    const round: Shape = 'round';

    toggleShape(oval); 
    toggleShape(round);

    expect(selectedShapes.value.sort()).toEqual([oval, round].sort());
  });

  it('deselecting the last selected color resets to all colors', () => {
    const { selectedColors, toggleColor } = init();
    const red: Color = 'red';

    toggleColor(red);
    toggleColor(red); 

    expect(selectedColors.value).toEqual(ALL_COLORS);
  });

  it('deselecting the last selected shape resets to all shapes', () => {
    const { selectedShapes, toggleShape } = init();
    const oval: Shape = 'oval';

    toggleShape(oval);
    toggleShape(oval); 

    expect(selectedShapes.value).toEqual(ALL_SHAPES);
  });

  it('filteredItems respects shape filter (rectangle only)', () => {
    const { selectedShapes, selectedColors, toggleShape, filteredItems } =
      init();


    const rectangle: Shape = 'rectangle';

    toggleShape(rectangle);

    expect(selectedShapes.value).toEqual([rectangle]);
    expect(selectedColors.value).toEqual(ALL_COLORS);

    expect(filteredItems.value.length).toBe(6);

    filteredItems.value.forEach((item) =>
      expect(item.shape).toBe('rectangle'),
    );
  });

  it('filteredItems respects color filter (red across all shapes)', () => {
    const { selectedShapes, selectedColors, toggleColor, filteredItems } =
      init();

    const red: Color = 'red';

    toggleColor(red);

    expect(selectedColors.value).toEqual([red]);
    expect(selectedShapes.value).toEqual(ALL_SHAPES);

    expect(filteredItems.value.length).toBe(5);
    filteredItems.value.forEach((item) => expect(item.color).toBe('red'));
  });

  it('filteredItems respects combined filters (oval + round, red only)', () => {
    const { selectedShapes, selectedColors, toggleColor, toggleShape, filteredItems } =
      init();

    const red: Color = 'red';
    const oval: Shape = 'oval';
    const round: Shape = 'round';

    toggleShape(oval);

    toggleShape(round);

    toggleColor(red);

    expect(selectedShapes.value.sort()).toEqual([oval, round].sort());
    expect(selectedColors.value).toEqual([red]);

    expect(filteredItems.value.length).toBe(2);
    const shapeSet = new Set(filteredItems.value.map((i) => i.shape));
    expect(shapeSet).toEqual(new Set<Shape>([oval, round]));
  });
});
