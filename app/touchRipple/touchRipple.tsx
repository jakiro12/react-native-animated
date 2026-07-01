import React, { useState, useRef, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type RippleData = {
  id: number;
  x: number;
  y: number;
  color:string;
};
const COLORS = [
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#00C7BE",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
];

export default function TouchRippleScreen() {
  const [ripples, setRipples] = useState<RippleData[]>([]);
  const nextId = useRef(0);
  const currentColor=useRef(0)
  const addRipple = (x: number, y: number) => {
    const id = nextId.current++;
    const color =COLORS[currentColor.current]
    currentColor.current=(currentColor.current + 1) % COLORS.length
    setRipples((prev) => [
    ...prev,
    {
      id,
      x,
      y,
      color,
    },
  ]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 400);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black" }}
      edges={["bottom", "top"]}
    >
      <Pressable
        style={styles.container}
        onPressIn={(e) => {
          const { locationX, locationY } = e.nativeEvent;
          addRipple(locationX, locationY);
        }}
      >
        {ripples.map((ripple) => (
          <Ripple
            key={ripple.id}
            x={ripple.x}
            y={ripple.y}
            color={ripple.color}
          />
        ))}
      </Pressable>
    </SafeAreaView>
  );
}

type RippleProps = {
  x: number;
  y: number;
  color:string;
};

function Ripple({ x, y,color }: RippleProps) {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0.6);

  useEffect(() => {
    scale.value = withTiming(2, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
    pointerEvents="none"
      style={[
        styles.ripple,
        animatedStyle,
        {
          left: x - 25,
          top: y - 25,
          backgroundColor:color
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ripple: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});