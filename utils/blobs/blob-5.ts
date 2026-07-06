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
export const upperDrop :DropTypes =
{name:"upperDrop",
    duration: 350,
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points: [
  { x: 0, y: -170 },
  { x: 18, y: -150 },
  { x: 0, y: -130 },
  { x: -18, y: -150 },
]}

export const lowerDrop :DropTypes =
{name:"lowerDrop",
    duration: 350,
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points: [
  { x: 0, y: -40 },

  { x: 80, y: 10 },
  { x: 100, y: 95 },

  { x: 0, y: 140 },

  { x: -100, y: 95 },

  { x: -80, y: 10 },
]}