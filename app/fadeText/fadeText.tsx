import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FadeTextAnimation = () => {
  const text = "Loading..." //Loaging _text
  const letters = text.split("") 

  const animatedValues = useRef(letters.map(() => new Animated.Value(0))).current

  const animateLetters = () => {
    animatedValues.forEach(anim => anim.setValue(0)) 
    const animations = animatedValues.map((animValue,_) =>
      Animated.timing(animValue, {
        toValue: 1,
        duration: 500, 
        delay: 1000, 
        useNativeDriver: true,
      })
    );    
    Animated.stagger(100, animations).start(() => {    
      setTimeout(() => {
        animateLetters()
      }, 500) 
    })
  }

  useEffect(() => {
    animateLetters()
  }, [])

  return (
     <SafeAreaView
                  style={{ flex: 1, backgroundColor: "black" }}
                  edges={["bottom", "top"]}
                >
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
