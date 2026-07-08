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
export const drops11:DropTypes ={
name:"drops",
 duration: 50,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -24 },

  { x: 70, y: -16 },
  { x: 110, y: 16 },
  { x: 125, y: 56 },
  { x: 110, y: 106 },
  { x: 70, y: 131 },

  { x: 0, y: 134 },

  { x: -70, y: 131 },
  { x: -110, y: 106 },
  { x: -125, y: 56 },
  { x: -110, y: 16 },
  { x: -70, y: -16 },
]
}