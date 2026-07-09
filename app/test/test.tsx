import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas, Path } from "@shopify/react-native-skia";
import { mPath } from "@/utils/drawletters/m";


export default function TestDraw() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black" }}
      edges={["top", "bottom"]}
    >
      <View style={styles.container}>
        <Canvas style={{ flex: 1 }}>
          <Path
            path={mPath()}
            style="stroke"
            color="black"
            strokeWidth={10}
          />
        </Canvas>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});