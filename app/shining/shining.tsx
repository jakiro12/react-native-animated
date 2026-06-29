import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const gradientPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(gradientPosition, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(gradientPosition, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [gradientPosition]);

  const gradientTranslateX = gradientPosition.interpolate({
    inputRange: [0, 1],
    outputRange: ["-20%", "20%"],
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black" }}
      edges={["bottom", "top"]}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Animated.View
            style={[
              styles.gradientContainer,
              {
                transform: [
                  { translateX: gradientTranslateX },
                  { rotate: "45deg" },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={["#FF3D00", "#FFB300", "#FFF176", "#FF6F00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            />
          </Animated.View>

          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  box: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: 100,
     shadowColor:"#000",
     shadowOffset: { width:0, height:25 }, shadowOpacity:1, shadowRadius:3, elevation:20    
  },
  gradientContainer: {
    width: "200%",
    height: "200%",
  },
  gradient: {
    flex: 1,
    width: "180%",
  },
  text: {
    zIndex: 1,
    position: "absolute",
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
});