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
export const drops13:DropTypes ={
name:"drops",
 duration: 80,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: 33 },

  { x: 95, y: 38 },
  { x: 155, y: 63 },
  { x: 185, y: 93 },
  { x: 180, y: 128 },
  { x: 120, y: 135 },
  { x: -120, y: 135 },
  { x: -180, y: 128 },
  { x: -185, y: 93 },
  { x: -155, y: 63 },
  { x: -95, y: 38 },
]
}