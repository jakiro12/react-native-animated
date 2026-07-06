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
export const dropStage3 :DropTypes= 
{name:"dropStage3",
  duration: 350,
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points:[
  { x: 0, y: -120 },

  { x: 35, y: -95 },
  { x: 75, y: -40 },

  { x: 105, y: 40 },

  { x: 80, y: 115 },

  { x: 0, y: 145 },

  { x: -80, y: 115 },

  { x: -105, y: 40 },

  { x: -75, y: -40 },

  { x: -35, y: -95 },
]}