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
 duration: 60,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -11 },

  { x: 78, y: -3 },
  { x: 128, y: 31 },
  { x: 150, y: 69 },
  { x: 148, y: 107 },
  { x: 105, y: 135 },
  { x: 0, y: 135 },
  { x: -105, y: 135 },
  { x: -148, y: 107 },
  { x: -150, y: 69 },
  { x: -128, y: 31 },
  { x: -78, y: -3 },
]
}