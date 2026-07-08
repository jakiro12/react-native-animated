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
 duration: 25,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -80 },

  { x: 50, y: -65 },
  { x: 87, y: -23 },
  { x: 100, y: 35 },
  { x: 87, y: 93 },
  { x: 50, y: 135 },

  { x: 0, y: 150 },

  { x: -50, y: 135 },
  { x: -87, y: 93 },
  { x: -100, y: 35 },
  { x: -87, y: -23 },
  { x: -50, y: -65 },
]
}