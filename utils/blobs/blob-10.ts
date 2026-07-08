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
 duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -88 },

  { x: 70, y: -72 },
  { x: 110, y: -40 },
  { x: 125, y: 0 },
  { x: 110, y: 40 },
  { x: 70, y: 75 },

  { x: 0, y: 78 },

  { x: -70, y: 75 },
  { x: -110, y: 40 },
  { x: -125, y: 0 },
  { x: -110, y: -40 },
  { x: -70, y: -72 },
]
}