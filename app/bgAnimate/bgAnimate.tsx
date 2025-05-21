import { View, StyleSheet, TouchableOpacity } from "react-native"
import Animated,{interpolateColor, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"

const BackgroundAnimate=()=>{
    const bgColorIndex=useSharedValue(0)
    const colors=["#0000FF","#FF0000","#FFFF00"]
    const animateBg=useAnimatedStyle(()=>{
        const bgColor=interpolateColor(
            bgColorIndex.value,
            [0,1,2],
            colors
        )
        return {backgroundColor:bgColor} //Retorna el estilo en linea con su nuevo valor :D
    })
    const handleBgView=(index:number)=>{
        bgColorIndex.value = withTiming(index,{duration:500},()=>{console.log('Animacion completada')})
    }
    return(
        <Animated.View style={[styles.container,animateBg]}>
            <View style={styles.btnContainer}>
                {colors.map((e,i)=>
                    <TouchableOpacity key={i} style={[styles.button,{backgroundColor:e}]}
                    onPress={()=>handleBgView(i)}
                    activeOpacity={0.7}
                    >
                    </TouchableOpacity>
                )}                
            </View>            
        </Animated.View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer:{
    width:'90%',
    height:150,    
    marginTop:'auto',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingInline:5,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  button:{
    width:60,
    height:60,
    borderWidth:1,
    borderColor:'#000000',
    borderRadius:5
  },
  })
export default BackgroundAnimate