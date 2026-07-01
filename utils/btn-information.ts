import { Href } from "expo-router";

export interface AnimationItem {
  title: string;
  route: Href;
}

export const animations: AnimationItem[] = [
  {
    title: "Animal Paws",
    route: "/paws/animalPaws",
  },
  {
    title: "Background Animated",
    route: "/bgAnimate/bgAnimate",
  },
  {
    title: "Falling Balls",
    route: "/fallingBalls/fallingBalls",
  },
  {
    title: "Float Boat",
    route: "/floatBoat/floatBoat",
  },
  {
    title: "Fragment Balls",
    route: "/fragment/balls",
  },
  {
    title: "Loading Text",
    route: "/fadeText/fadeText",
  },
  {
    title: "Opposite Loaders",
    route: "/opposite/circles",
  },
  {
    title: "Pulse",
    route: "/pulse/pulse",
  },
  {
    title: "Resize View",
    route: "/resize/resize",
  },
  {
    title: "Shining Box",
    route: "/shining/shining",
  },
  {
    title:"Touch Ripple",
    route:"/touchRipple/touchRipple",
  }
];