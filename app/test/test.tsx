import React, { useState } from "react";
import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function TouchRippleScreen() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (x: number, y: number) => {
    const id = Date.now();

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
        <Ripple key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
    </Pressable>
    </SafeAreaView>
  );
}

function Ripple({ x, y }: Ripple) {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0.6);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  React.useEffect(() => {
    scale.value = withTiming(2, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
  }, []);

  return (
    <Animated.View
      style={[
        styles.ripple,
        animatedStyle,
        { left: x - 25, top: y - 25 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  ripple: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 149, 255, 0.75)",
  },
});