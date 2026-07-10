import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas, Path } from "@shopify/react-native-skia";
import {
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { mPath } from "@/utils/drawletters/m";

export default function TestDraw() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 1500,
    });
  }, []);

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
            strokeWidth={8}
            start={0}
            end={progress}
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