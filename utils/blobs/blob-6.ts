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
export const drops:DropTypes ={
name:"drops",
 duration: 30,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  { x: 0, y: -90 },

  { x: 50, y: -77 },
  { x: 87, y: -40 },
  { x: 100, y: 10 },
  { x: 87, y: 60 },
  { x: 50, y: 97 },

  { x: 0, y: 110 },

  { x: -50, y: 97 },
  { x: -87, y: 60 },
  { x: -100, y: 10 },
  { x: -87, y: -40 },
  { x: -50, y: -77 },
]
}