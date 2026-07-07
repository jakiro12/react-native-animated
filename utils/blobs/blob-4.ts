type Point = {
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
export const dropStage4 :DropTypes=
{name:"dropStage4",
  duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points: [
  { x: 0, y: -150 },

  { x: 18, y: -125 },
  { x: 32, y: -80 },

  { x: 85, y: 20 },

  { x: 100, y: 105 },

  { x: 0, y: 145 },

  { x: -100, y: 105 },

  { x: -85, y: 20 },

  { x: -32, y: -80 },

  { x: -18, y: -125 },
]}