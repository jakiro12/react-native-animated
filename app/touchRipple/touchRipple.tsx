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
};

export default function TouchRippleScreen() {
  const [ripples, setRipples] = useState<RippleData[]>([]);
  const nextId = useRef(0);

  const addRipple = (x: number, y: number) => {
    const id = nextId.current++;

    setRipples((prev) => [...prev, { id, x, y }]);

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
          />
        ))}
      </Pressable>
    </SafeAreaView>
  );
}

type RippleProps = {
  x: number;
  y: number;
};

function Ripple({ x, y }: RippleProps) {
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 255, 0, 0.84)",
  },
});