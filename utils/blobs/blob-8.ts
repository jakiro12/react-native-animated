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
export const drops8:DropTypes ={
name:"drops",
 duration: 25,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -40 },

  { x: 70, y: -24 },
  { x: 110, y: 8 },
  { x: 125, y: 48 },
  { x: 110, y: 88 },
  { x: 70, y: 120 },

  { x: 0, y: 136 },

  { x: -70, y: 120 },
  { x: -110, y: 88 },
  { x: -125, y: 48 },
  { x: -110, y: 8 },
  { x: -70, y: -24 },
]
}