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
 duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -40 },

  { x: 95, y: -35 },
  { x: 155, y: -10 },
  { x: 185, y: 20 },
  { x: 180, y: 55 },
  { x: 120, y: 62 },
  { x: -120, y: 62 },
  { x: -180, y: 55 },
  { x: -185, y: 20 },
  { x: -155, y: -10 },
  { x: -95, y: -35 },
]
}