import { ScrollView } from "react-native";
import styles from '../styles/index-styles'
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedButton from "./components/navigate-btn";
import { animations } from "@/utils/btn-information";
export default function Index() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black" }}
      edges={["bottom", "top"]}
    >    
      <ScrollView 
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}
        >      
       {animations.map((animation,i)=>
        <AnimatedButton 
        key={i}
        title={animation.title}
        route={animation.route}
        style={styles.btnAnimation}
        />
      )} 
      </ScrollView>
    </SafeAreaView>
  );
}
