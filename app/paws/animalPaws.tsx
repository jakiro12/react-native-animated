import { View, StyleSheet, Animated } from "react-native"
import { useEffect,useRef, useState } from "react"
const images=[ //Direccion de cada imagen
    require('../../assets/animate/dog-paw.png'),
    require('../../assets/animate/cat-paw.png'),
    require('../../assets/animate/horse-paw.png')
]
const AnimalPawsFadeImage=()=>{
    const opacity=useRef(new Animated.Value(0)).current
    const [index, setIndex] = useState(0) //Indice inicial del array de imagenes

      useEffect(() => {
    const fadeInOut = () => {
      Animated.sequence([
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
      ]).start(() => { //Luego de la primera animacion se aumenta en 1 el index
        setIndex((prevIndex) => (prevIndex + 1) % images.length) //La division retorna el resto del modulo
      })
    }
    fadeInOut()
  }, [index])
    return(
        <View style={styles.container}>
           <Animated.Image 
            source={images[index]}
            style={[styles.image,{opacity}]}
            resizeMode='contain'
           />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff8e",
  },
  image:{
    width:150,
    height:150
  }
})

export default AnimalPawsFadeImage