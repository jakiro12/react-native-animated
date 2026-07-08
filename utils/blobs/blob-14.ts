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
export const drops14:DropTypes ={
name:"drops",
 duration: 120,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: 62 },

  { x: 115, y: 66 },
  { x: 185, y: 84 },
  { x: 220, y: 102 },
  { x: 215, y: 128 },
  { x: 150, y: 135 },

  { x: -150, y: 135 },
  { x: -215, y: 128 },
  { x: -220, y: 102 },
  { x: -185, y: 84 },
  { x: -115, y: 66 },
]
}