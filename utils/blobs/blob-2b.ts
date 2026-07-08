export type Point = {
  x: number;
  y: number;
};

export type DropTypes = {
  name: string;
  duration: number;
  scale: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
  points: Point[];
};

export const dropStage2b: DropTypes = {
  name: "dropStage2",
  duration: 70,
  scale: 0.4,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
 points: [
  { x: 80, y: -150 },
  { x: 60, y: -135 },
  { x: 48, y: -128 },
  { x: 78, y: -99 },
  { x: 95, y: -66 },
  { x: 100, y: -28 },
  { x: 95, y: 10 },
  { x: 81, y: 42 },
  { x: 59, y: 67 },
  { x: 31, y: 83 },
  { x: 0, y: 90 },
  { x: -31, y: 83 },
  { x: -59, y: 67 },
  { x: -81, y: 42 },
  { x: -95, y: 10 },
  { x: -100, y: -28 },
  { x: -95, y: -66 },
  { x: -78, y: -99 },
  { x: -48, y: -128 },
  { x: -60, y: -135 },
  { x: -80, y: -150 },
]
};