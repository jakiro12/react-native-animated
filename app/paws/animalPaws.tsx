import { View, StyleSheet, Animated } from "react-native"
import { useEffect,useRef, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
const images=[ 
    require('../../assets/animate/dog-paw.png'),
    require('../../assets/animate/cat-paw.png'),
    require('../../assets/animate/horse-paw.png')
]
const AnimalPawsFadeImage=()=>{
    const opacity=useRef(new Animated.Value(0)).current
    const [index, setIndex] = useState(0) 

   useEffect(() => {
  const animation = Animated.sequence([
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.delay(500),
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]);

  animation.start(({ finished }) => {
    if (finished) {
      setIndex((prev) => (prev + 1) % images.length);
    }
  });

  return () => {
    animation.stop();
  };
}, [index]);
    return(
          <SafeAreaView
                        style={{ flex: 1, backgroundColor: "black" }}
                        edges={["bottom", "top"]}
                      >
        <View style={styles.container}>
           <Animated.Image 
            source={images[index]}
            style={[styles.image,{opacity}]}
            resizeMode='contain'
           />
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image:{
    width:150,
    height:150
  }
})

export default AnimalPawsFadeImage