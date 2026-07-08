import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { waterFalling } from "@/utils/blobs";

const { width } = Dimensions.get("window");

const CENTER_X = width / 2;
const CENTER_Y = 400;

const TENSION = 1;

export default function TestAnimation() {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const currentBlob = waterFalling[currentAnimation];

  const blob = useMemo(() => {
    const pts = waterFalling[currentAnimation].points.map((p) => ({
      x: p.x*currentBlob.scale + CENTER_X + currentBlob.offsetX,
      y: p.y*currentBlob.scale + CENTER_Y + currentBlob.offsetY,
    }));

    if (pts.length === 0) {
      return Skia.PathBuilder.Make().build();
    }

    const builder = Skia.PathBuilder.Make();

    builder.moveTo(pts[0].x, pts[0].y);

    for (let i = 0; i < pts.length; i++) {
      const p0 = pts[(i - 1 + pts.length) % pts.length];
      const p1 = pts[i];
      const p2 = pts[(i + 1) % pts.length];
      const p3 = pts[(i + 2) % pts.length];

      const cp1x = p1.x + ((p2.x - p0.x) / 6) * TENSION;
      const cp1y = p1.y + ((p2.y - p0.y) / 6) * TENSION;

      const cp2x = p2.x - ((p3.x - p1.x) / 6) * TENSION;
      const cp2y = p2.y - ((p3.y - p1.y) / 6) * TENSION;

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
  }, [currentBlob]);

 useEffect(() => {
    const id = setInterval(() => {
        setCurrentAnimation((prev) =>
            (prev + 1) % waterFalling.length
        );
    }, waterFalling[currentAnimation].duration);

    return () => clearInterval(id);
}, [currentAnimation]) 
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "bottom"]}
    >
      <View style={styles.container}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Path path={blob} color="#04ac1a" />
        </Canvas>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});