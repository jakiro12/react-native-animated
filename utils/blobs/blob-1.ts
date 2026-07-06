export type Point = {
  x: number;
  y: number;
};

export type DropType = {
  name: string;
  duration: number;
  scale: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
  points: Point[];
};

export const dropStage1: DropType = {
  name: "dropStage1",

  duration: 350,

  scale: 0.45,

  rotation: 0,

  offsetX: 0,
  offsetY: 0,

  points: [
    { x: -80, y: 0 },
    { x: 80, y: 0 },

    { x: 90, y: 30 },
    { x: 90, y: 70 },

    { x: 60, y: 100 },
    { x: 0, y: 110 },

    { x: -60, y: 100 },
    { x: -90, y: 70 },

    { x: -90, y: 30 },
  ],
};