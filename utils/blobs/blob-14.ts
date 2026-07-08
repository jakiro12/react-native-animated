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
 duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -28 },

  { x: 115, y: -24 },
  { x: 185, y: -6 },
  { x: 220, y: 12 },
  { x: 215, y: 38 },
  { x: 150, y: 45 },

  { x: -150, y: 45 },
  { x: -215, y: 38 },
  { x: -220, y: 12 },
  { x: -185, y: -6 },
  { x: -115, y: -24 },
]
}