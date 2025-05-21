import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from '../styles/index-styles'
import { router } from "expo-router";
export default function Index() {
  return (
    <View
      style={styles.container}      
    >
      <StatusBar  backgroundColor="#00000088"/>
      <ScrollView 
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}
        >
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/opposite/circles')}
          >
          <Text style={styles.textTitle}>Opposite Loaders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/pulse/pulse')}
          >
          <Text style={styles.textTitle}>Pulse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/fragment/balls')}
          >
          <Text style={styles.textTitle}>Fragment Balls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/fadeText/fadeText')}
          >
          <Text style={styles.textTitle}>Fade Text</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/paws/animalPaws')}
          >
          <Text style={styles.textTitle}>Animal Paws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/fallingBalls/fallingBalls')}
          >
          <Text style={styles.textTitle}>Falling Balls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/floatBoat/floatBoat')}
          >
          <Text style={styles.textTitle}>Float Boat</Text>
        </TouchableOpacity>         
        <TouchableOpacity style={styles.btnAnimation}
          activeOpacity={0.7}
          onPress={()=>router.push('/bgAnimate/bgAnimate')}
          >
          <Text style={styles.textTitle}>Background Animate</Text>
        </TouchableOpacity>         
      </ScrollView>
    </View>
  );
}
