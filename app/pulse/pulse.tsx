import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

const PulseAnimation = () => {
  const pulseValue = useRef(new Animated.Value(1)).current; // Valor inicial de la escala

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.3,  
          duration: 500, 
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,    
          duration: 500, 
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseValue]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ scale: pulseValue }] }]} 
      >
        <Animated.Image
            source={require('../../assets/animate/react-logo.png')}
            style={styles.image}
            resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff8e",
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
