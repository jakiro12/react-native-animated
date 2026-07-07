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
  duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
points:[
  
  { x: 22, y: -125 },
  { x: 32, y: -80 },

  { x: 85, y: 20 },

  { x: 90, y: 105 },

  { x: 0, y: 145 },

  { x: -90, y: 105 },

  { x: -85, y: 20 },

  { x: -32, y: -80 },

  { x: -22, y: -125 },
]}