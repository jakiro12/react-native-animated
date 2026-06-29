import { View, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FloatBoatAnimation = () => {
  const rotation = useRef(new Animated.Value(0)).current
  const float = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: -10,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start()
  }, [])

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-8deg', '8deg'],
  })

  const animatedStyle = {
    transform: [
      { translateY: float }, 
      { rotate: rotateInterpolate }, 
    ],
  }

  return (
     <SafeAreaView
                      style={{ flex: 1, backgroundColor: "black" }}
                      edges={["bottom", "top"]}
                    >
    <View style={styles.container}>
      <Animated.Image
        style={[styles.boat, animatedStyle]}
        source={require('../../assets/animate/boat.png')}
        resizeMode="contain"
      />
      <View style={styles.sea}>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  boat: {
    width: 200,
    height: 200,
    position: "absolute",
  },
  sea:{
    width:'100%',
    height:'44%',
    backgroundColor:'#0065ff',
    marginTop:'auto',
    borderTopColor:'#ffffffa9',
    borderTopWidth:2
  }
});

export default FloatBoatAnimation
