import { View, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

const FloatBoatAnimation = () => {
  const rotation = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animación de rotación de lado a lado
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

    // Animación de flotación vertical
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
    ).start();
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-8deg', '8deg'],
  });

  const animatedStyle = {
    transform: [
      { translateY: float }, // Flotación
      { rotate: rotateInterpolate }, // Rotación simulando balanceo
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.boat, animatedStyle]}
        source={require('../../assets/animate/boat.png')}
        resizeMode="contain"
      />
      <View style={styles.sea}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff8e",
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
