import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
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
            { transform: [{ translateX: gradientTranslateX }] },
          ]}
        >
          <LinearGradient
            colors={['#FF6F00', '#FFD200', '#FF6F00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
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
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius:20
  },
  gradientContainer: {
    width: '200%', 
    height: '100%',
  },
  gradient: {
    flex: 1,
    width:'200%'
  },  
})
