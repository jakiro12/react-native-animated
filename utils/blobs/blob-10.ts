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
export const drops10:DropTypes ={
name:"drops",
 duration: 40,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -30 },

  { x: 70, y: -14 },
  { x: 110, y: 18 },
  { x: 125, y: 58 },
  { x: 110, y: 98 },
  { x: 70, y: 133 },

  { x: 0, y: 136 },

  { x: -70, y: 133 },
  { x: -110, y: 98 },
  { x: -125, y: 58 },
  { x: -110, y: 18 },
  { x: -70, y: -14 },
]
}