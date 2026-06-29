import { TouchableOpacity, Text,StyleProp,ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  withSequence
} from "react-native-reanimated";
import { Href, router } from "expo-router";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface AnimatedButtonProps{
    title:string;
    route:Href;
    style:StyleProp<ViewStyle>;
}

const  AnimatedButton : React.FC<AnimatedButtonProps>=({
  title,
  route,
  style,
})=> {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const navigate = () => {
    router.push(route);
  };

  const handlePress = () => {
    scale.value = withSequence(
        withTiming(1.08,{duration:120}),
        withTiming(1,{duration:120},(finished)=>{
            if(finished){
                runOnJS(navigate)()
            }
        })
    )   
  };
  

  return (
    <AnimatedTouchable
      style={[style, animatedStyle]}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Text
      style={{fontSize:20,fontWeight:'bold',color:'#ffffff'}}
      >{title}</Text>
    </AnimatedTouchable>
  );
}
export default AnimatedButton