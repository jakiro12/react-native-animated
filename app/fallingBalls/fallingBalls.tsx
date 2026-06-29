import { View, StyleSheet, Animated, Easing, Dimensions } from "react-native";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FallingBallsAnimation = () => {
  const { width } = Dimensions.get("screen")
  const widthBall = 40
  const numberBalls = 4
  const widthNotFree = numberBalls * widthBall
  const freeWidth = width - widthNotFree
  const quantitySpaces = numberBalls + 1
  const spaceBetweenBalls = freeWidth / quantitySpaces
  const centerBallPosition = -((widthNotFree + spaceBetweenBalls * (numberBalls - 1)) / 2)

  const ballPositionsX = Array.from({ length: numberBalls }, (_, i) =>
    centerBallPosition + i * (widthBall + spaceBetweenBalls) + widthBall / 2
  )

  const positions = ballPositionsX.map((x) =>
    useRef(new Animated.ValueXY({ x, y: -100 })).current
  )

  const targets = ballPositionsX.map((x) => ({ x, y: 0 }));

useEffect(() => {
  const animations = positions.map((position, index) =>
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: targets[index],
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
          delay: index * 300,
        }),
        Animated.timing(position, {
          toValue: { x: targets[index].x, y: -100 },
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    )
  );

  animations.forEach((animation) => animation.start());

  return () => {
    animations.forEach((animation) => animation.stop());
  };
}, []);
  return (
     <SafeAreaView
                  style={{ flex: 1, backgroundColor: "black" }}
                  edges={["bottom", "top"]}
                >
    <View style={styles.container}>
      {positions.map((pos, index) => (
        <Animated.View
          key={index}
          style={[
            styles.ball,
            { transform: pos.getTranslateTransform() },
            { backgroundColor: colors[index] },
          ]}
        />
      ))}
    </View>
    </SafeAreaView>
  )
}

const colors = ["#0066ff3f", "#0066ff7f", "#0066ffbf", "#0065ff"];

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  ball: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})

export default FallingBallsAnimation;
