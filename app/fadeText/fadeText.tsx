import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

const FadeTextAnimation = () => {
  const text = "Loading..."
  const letters = text.split("") //Separar el string en elementos individuales

  const animatedValues = useRef(letters.map(() => new Animated.Value(0))).current
  //Asignar a cada elemento un valor 0 en la animacion, de esta manera el elemento es invisible al incio

  const animateLetters = () => {
    animatedValues.forEach(anim => anim.setValue(0)) //Reestable el valor de cada elemento a 0 en la animacion sino no se puede repetir una vez completada
    const animations = animatedValues.map((animValue, index) =>
      Animated.timing(animValue, {
        toValue: 1,
        duration: 500, //Duracion de la animacion luego de completarse
        delay: 1000, //Tiempo de retraso para iniciar la animacion
        useNativeDriver: true,
      })
    );    
    Animated.stagger(100, animations).start(() => {//Stagger permite animar un array sin provocar superposicion      
      setTimeout(() => {
        animateLetters()
      }, 500) //Repite la animacion
    })
  }

  useEffect(() => {
    animateLetters()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {letters.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[styles.letter,{opacity: animatedValues[index]}]}>
            {letter}
          </Animated.Text>
        ))}
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
  textContainer: {
    flexDirection: "row",
  },
  letter: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});

export default FadeTextAnimation;
