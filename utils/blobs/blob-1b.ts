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

export const dropStage1b: DropTypes = {
  name: "dropStage2",
  duration: 100,
  scale: 0.4,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
 points: [
  { x: 80, y: -150 },
  { x: 80, y: -135 },
  { x: 68, y: -128 },
  { x: 81, y: -99 },
  { x: 95, y: -71 },
  { x: 100, y: -40 },
  { x: 95, y: -9 },
  { x: 81, y: 19 },
  { x: 59, y: 41 },
  { x: 31, y: 55 },
  { x: 0, y: 60 },
  { x: -31, y: 55 },
  { x: -59, y: 41 },
  { x: -81, y: 19 },
  { x: -95, y: -9 },
  { x: -100, y: -40 },
  { x: -95, y: -71 },
  { x: -81, y: -99 },
  { x: -68, y: -128 },
  { x: -80, y: -135 },
  { x: -80, y: -150 },
]
};