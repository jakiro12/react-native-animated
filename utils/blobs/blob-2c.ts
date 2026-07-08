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

export const dropStage2c: DropTypes = {
  name: "dropStage2",
  duration: 60,
  scale: 0.4,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points: [
  { x: 68, y: -150 },
  { x: 48, y: -138 },
  { x: 36, y: -128 },
  { x: 68, y: -102 },
  { x: 94, y: -58 },
  { x: 108, y: -12 },
  { x: 108, y: 32 },
  { x: 94, y: 68 },
  { x: 68, y: 94 },
  { x: 36, y: 110 },
  { x: 0, y: 118 },
  { x: -36, y: 110 },
  { x: -68, y: 94 },
  { x: -94, y: 68 },
  { x: -108, y: 32 },
  { x: -108, y: -12 },
  { x: -94, y: -58 },
  { x: -68, y: -102 },
  { x: -36, y: -128 },
  { x: -48, y: -138 },
  { x: -68, y: -150 },
]
};