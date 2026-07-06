import React, { useMemo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import {  dropStage1 } from "@/utils/blobs/index";


const { width, height } = Dimensions.get("window");

const CENTER_X = width / 2;
const CENTER_Y = height / 2;



export default function TestAnimation() {
  const blob = useMemo(() => {
    // Trasladamos el blob al centro
    const pts= dropStage1.points.map((p) => ({
      x: p.x + CENTER_X,
      y: p.y + CENTER_Y,
    }));

    const builder = Skia.PathBuilder.Make();

    builder.moveTo(pts[0].x, pts[0].y);

    const tension = 1;

    for (let i = 0; i < pts.length; i++) {
      const p0 = pts[(i - 1 + pts.length) % pts.length];
      const p1 = pts[i];
      const p2 = pts[(i + 1) % pts.length];
      const p3 = pts[(i + 2) % pts.length];

      const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension;
      const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension;

      const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension;
      const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension;

      builder.cubicTo(
        cp1x,
        cp1y,
        cp2x,
        cp2y,
        p2.x,
        p2.y
      );
    }

    return builder.close().build();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black" }}
      edges={["top", "bottom"]}
    >
      <View style={styles.container}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Path path={blob} color="#5D6BFF" />
        </Canvas>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});