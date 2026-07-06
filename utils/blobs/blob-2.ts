export type Point = {
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

export const dropStage2: DropTypes = {
  name: "dropStage2",
  duration: 350,
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
  points: [
    { x: 0, y: -20 },

    { x: 55, y: 0 },
    { x: 90, y: 50 },
    { x: 85, y: 120 },

    { x: 40, y: 170 },

    { x: 0, y: 190 },

    { x: -40, y: 170 },

    { x: -85, y: 120 },
    { x: -90, y: 50 },
    { x: -55, y: 0 },
  ],
};