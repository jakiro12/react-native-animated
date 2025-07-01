import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//Instalar npx expo install expo-linear-gradient para crear el componente con gradiente :D
export default function App() {
  const gradientPosition = useRef(new Animated.Value(0)).current;  
  const animateGradient = () => {
    Animated.loop(
    Animated.sequence([  Animated.timing(gradientPosition, {
        toValue: 1, 
        duration: 2000, 
        useNativeDriver: false,
      }),
      Animated.timing(gradientPosition, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),])
    ).start();
  };

  useEffect(() => {
    animateGradient()
  }, [])

  const gradientTranslateX = gradientPosition.interpolate({
    inputRange: [0, 1],
    outputRange: ['-20%', '20%'], 
  })

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Animated.View
          style={[
            styles.gradientContainer,
            { transform: [{ translateX: gradientTranslateX },{rotate:'45deg'}] },
          ]}
        >
          <LinearGradient
            colors={['#FF6F00', '#FFD200', '#FF6F00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
          <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff8e',
  },
  box: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden', 
    borderRadius:20,
    boxShadow:'2px 2px 5px 0pxrgba(0, 0, 0, 0.34)',
  },
  gradientContainer: {
    width: '250%', 
    height: '250%',
  },
  gradient: {
    flex: 1,
    width:'200%'
  },  
  text:{
    zIndex:1,
    position:'absolute',
    color:'#ffffff',
    fontSize:22,
    fontWeight:'bold'
  }
})
