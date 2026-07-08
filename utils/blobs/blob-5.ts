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


export const lowerDrop :DropTypes =
{name:"lowerDrop",
    duration: 35,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points: [
  { x: 0, y: -100 },

  { x: 87, y: -50 },
  { x: 87, y: 50 },

  { x: 0, y: 100 },

  { x: -87, y: 50 },

  { x: -87, y: -50 },
]}