import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PulseAnimation = () => {
  const pulseValue = useRef(new Animated.Value(1)).current; 

useEffect(() => {
  const animation = Animated.loop(
    Animated.sequence([
      Animated.timing(pulseValue, {
        toValue: 1.18,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(pulseValue, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),

      Animated.timing(pulseValue, {
        toValue: 1.1,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(pulseValue, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),

      Animated.delay(700),
    ])
  );

  animation.start();

  return () => animation.stop();
}, []);
  return (
     <SafeAreaView
                  style={{ flex: 1, backgroundColor: "black" }}
                  edges={["bottom", "top"]}
                >
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ scale: pulseValue }] }]} 
      >
        <Animated.Image
            source={require('../../assets/animate/react-logo.png')}
            style={styles.image}
            resizeMode="cover"
        />
      </Animated.View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  box: {
    width: 150,
    height: 150,
  },
  image:{
    width:150,
    height:150,
  }
});

export default PulseAnimation;
