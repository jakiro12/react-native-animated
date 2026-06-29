import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import Animated,{interpolateColor, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"
import { SafeAreaView } from "react-native-safe-area-context"

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
        bgColorIndex.value = withTiming(index,{duration:2000},()=>{})
    }
    return(
        <SafeAreaView
              style={{ flex: 1, backgroundColor: "black" }}
              edges={["bottom", "top"]}
            >
        <Animated.View style={[styles.container,animateBg]}>
      <View style={styles.cardOptions}>
                <Text style={styles.textCard}>
                    Change between colors
                </Text>
            <View style={styles.btnContainer}>
                {colors.map((e,i)=>
                    <TouchableOpacity key={i} style={[styles.button,{backgroundColor:e}]}
                    onPress={()=>handleBgView(i)}
                    activeOpacity={0.7}
                    >
                    </TouchableOpacity>
                )}                
            </View>            
        </View>
        </Animated.View>
        </SafeAreaView>
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
    height:'80%',    
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingInline:5,
  },
  button:{
    width:60,
    height:60,
    borderWidth:1,
    borderRadius:5
  },
  cardOptions:{
    width:'80%',
    height:150,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    marginTop:'auto',
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  textCard:{
    fontSize:17,
    fontWeight:'bold'
  }
  })
export default BackgroundAnimate