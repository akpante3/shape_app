// types/filters.ts
export type Shape = 'oval' | 'round' | 'triangle' | 'square' | 'rectangle';

export type Color =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'lightblue'
  | 'gray';

export interface Item {
  id: number;
  shape: Shape;
  color: Color;
}

export const ALL_SHAPES: Shape[] = [
  'oval',
  'round',
  'triangle',
  'square',
  'rectangle',
];

export const ALL_COLORS: Color[] = [
  'red',
  'blue',
  'green',
  'yellow',
  'lightblue',
  'gray',
];

export const SHAPE_LABELS: Record<Shape, string> = {
  oval: 'oval',
  round: 'round',
  triangle: 'triangle',
  square: 'square',
  rectangle: 'rectangle',
};

export const COLOR_LABELS: Record<Color, string> = {
  red: 'Red',
  blue: 'Blue',
  green: 'Green',
  yellow: 'Yellow',
  lightblue: 'Light blue',
  gray: 'Gray',
};
