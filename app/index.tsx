import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from '../styles/index-styles'
import { router } from "expo-router";
export default function Index() {
  return (
    <View
      style={styles.container}      
    >
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
      </ScrollView>
    </View>
  );
}
