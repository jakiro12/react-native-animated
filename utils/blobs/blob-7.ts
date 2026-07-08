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
export const drops7:DropTypes ={
name:"drops",
 duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -115 },

  { x: 50, y: -100 },
  { x: 87, y: -58 },
  { x: 100, y: 0 },
  { x: 87, y: 58 },
  { x: 50, y: 100 },

  { x: 0, y: 115 },

  { x: -50, y: 100 },
  { x: -87, y: 58 },
  { x: -100, y: 0 },
  { x: -87, y: -58 },
  { x: -50, y: -100 },
]
}