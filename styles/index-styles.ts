import { StyleSheet,ImageStyle,ViewStyle,TextStyle, Dimensions } from "react-native";

interface StyleListTypes{
    container:ViewStyle
    containerScroll:ViewStyle
    btnAnimation:ViewStyle
    textTitle:TextStyle
}
const { width } = Dimensions.get("window");

const loginStyles : StyleListTypes  = StyleSheet.create({
    container:{
        height: "100%",
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
     containerScroll:{
        width:width * 0.95,
        rowGap:15,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20,  
        paddingBottom:10,         
    },
    btnAnimation:{
        width:'95%',
        height:80,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ffffff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'2px 2px 5px 0pxrgba(0, 0, 0, 0.34)',
        backgroundColor:'#0065ff'
    },
    textTitle:{
        fontSize:20,
        fontWeight:500,
        color:'#ffffff'
    }
})

export default loginStyles