import { describe, it, expect } from 'vitest';
import {
  ALL_COLORS,
  ALL_SHAPES,
  type Color,
  type Shape,
} from '~/types/filters';
import { getGridTitle } from '~/utils/gridTitle';

describe('getGridTitle', () => {
  const red: Color = 'red';
  const oval: Shape = 'oval';
  const round: Shape = 'round';

  it('1. All items when all colors & shapes selected', () => {
    const title = getGridTitle(ALL_SHAPES, ALL_COLORS);
    expect(title).toBe('All items:');
  });

  it('2a. Multiple items when all colors & multiple shapes', () => {
    const title = getGridTitle(['oval', 'round'], ALL_COLORS);
    expect(title).toBe('Multiple items:');
  });

  it('2b. Multiple items when all shapes & multiple colors', () => {
    const title = getGridTitle(ALL_SHAPES, ['red', 'blue']);
    expect(title).toBe('Multiple items:');
  });

  it('3. All red items when all shapes & single color', () => {
    const title = getGridTitle(ALL_SHAPES, [red]);
    expect(title).toBe('All red items:');
  });

  it('4. All oval items when all colors & single shape', () => {
    const title = getGridTitle([oval], ALL_COLORS);
    expect(title).toBe('All oval items:');
  });

  it('5. Multiple red items when multiple shapes & single color', () => {
    const title = getGridTitle([oval, round], [red]);
    expect(title).toBe('Multiple red items:');
  });

  it('6. Multiple oval items when multiple colors & single shape', () => {
    const title = getGridTitle([oval], ['red', 'blue']);
    expect(title).toBe('Multiple oval items:');
  });

  it('7. Red oval items when single color & single shape', () => {
    const title = getGridTitle([oval], [red]);
    expect(title).toBe('Red oval items:');
  });
});
