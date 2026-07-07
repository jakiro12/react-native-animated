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
  duration: 700,
  scale: 0.5,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
 points: [
  { x: 80, y: -110 },    // 0
  { x: 80, y: -95 },    // 0
  { x: 58, y: -88 },    // 1
  
  { x: 81, y: -59 },
  { x: 95, y: -31 },

  { x: 100, y: 0 },

  { x: 95, y: 31 },
  { x: 81, y: 59 },
  { x: 59, y: 81 },
  { x: 31, y: 95 },

  { x: 0, y: 100 },

  { x: -31, y: 95 },
  { x: -59, y: 81 },
  { x: -81, y: 59 },
  { x: -95, y: 31 },

  { x: -100, y: 0 },

  { x: -95, y: -31 },
  { x: -81, y: -59 },
  { x: -59, y: -81 },

  { x: -58, y: -88 },   // 11
  { x: -80, y: -95 },   // 12
  { x: -80, y: -110 },   // 12

]
};