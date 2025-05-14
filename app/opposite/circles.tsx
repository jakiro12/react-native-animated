import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet,Easing } from 'react-native';
const CombinedAnimation = () => {
  const rotateValue = useRef(new Animated.Value(0)).current; //Valor inicial de la rotacion
  const pulseValue = useRef(new Animated.Value(1)).current; //Valor inicial de la escala

  useEffect(() => {
       Animated.loop(
         Animated.sequence([
            Animated.timing(rotateValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.linear //Velocidad de la animacion como en CSS, se mantiene constante
          }),
            
         ])
        ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1, //Valor final de la animacion
          duration: 2000,
          useNativeDriver: true,
        }),        
      ])
    ).start();
  }, [rotateValue, pulseValue]);

  const combinedStyle = {
    transform: [
      {
        rotate: rotateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
      {
        scale: pulseValue,
      },
    ],
  };

  const combinedStyleOpposite = {
    transform: [
      {
        rotate: rotateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['360deg', '0deg'],
        }),
      },
      {
        scale: pulseValue,
      },
    ],
  };


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, combinedStyle]}>
        <Animated.Image
          source={require('../../assets/animate/bigCircle.png')}
          style={styles.box}
          resizeMode="contain"
        />
      </Animated.View>
      <View style={styles.boxto}>
        <Animated.View style={[styles.secondCircle, combinedStyleOpposite]}>
          <Animated.Image
            source={require('../../assets/animate/tinyCircle.png')}
            style={styles.secondCircle}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff8e',
    position:'relative'
  },
  box: {
    width: 130,
    height:130,   
  },
  boxto:{
    width:130,
    height:130,  
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    position: 'absolute',      
    top: '50%',                
    left: '50%',               
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],      
  },
  secondCircle:{
    width:120,
    height:120
  }
});

export default CombinedAnimation;
