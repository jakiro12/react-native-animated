import { StyleSheet,ImageStyle,ViewStyle,TextStyle, Dimensions } from "react-native";

interface StyleListTypes{
    containerScroll:ViewStyle
    btnAnimation:ViewStyle
    textTitle:TextStyle
}

const loginStyles : StyleListTypes  = StyleSheet.create({   
     containerScroll:{
        width:'100%',
        rowGap:15,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20,  
        paddingBottom:10,  
        backgroundColor:'#ffffff'
    },
    btnAnimation:{
        width:'90%',
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