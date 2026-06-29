import { View, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FragmentBalls = () => {
  const positions = [
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
  ]

  
  const targets = [ 
    { x: -80, y: -80 }, 
    { x: 80, y: -80 }, 
    { x: -80, y: 80 },  
    { x: 80, y: 80 },   
  ]

useEffect(() => {
  const animations = positions.map((position, index) =>
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: targets[index],
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
          delay: 500,
        }),
        Animated.timing(position, {
          toValue: { x: 0, y: 0 },
          duration: 1000,
          easing: Easing.ease,
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
  );
};

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
});

export default FragmentBalls;
