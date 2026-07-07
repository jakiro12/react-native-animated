type Point = {
  x: number;
  y: number;
  radius:number;
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
 duration: 700,
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0, 
points: [
  {
    x: 0,
    y: 120,
    radius: 60,
  },
  {
    x: -35,
    y: 20,
    radius: 18,
  },
  {
    x: 30,
    y: -5,
    radius: 12,
  },
  {
    x: 55,
    y: -40,
    radius: 8,
  },
]
}