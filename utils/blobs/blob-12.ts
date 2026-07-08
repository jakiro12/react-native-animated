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
export const drops12:DropTypes ={
name:"drops",
 duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -60 },

  { x: 78, y: -52 },
  { x: 128, y: -18 },
  { x: 150, y: 20 },
  { x: 148, y: 58 },
  { x: 105, y: 82 },
  { x: 0, y: 86 },
  { x: -105, y: 82 },
  { x: -148, y: 58 },
  { x: -150, y: 20 },
  { x: -128, y: -18 },
  { x: -78, y: -52 },
]
}