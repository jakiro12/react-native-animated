import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ITEM_SIZE = 100;
const ITEM_SPACING = 60;
const ITEM_WIDTH = ITEM_SIZE + ITEM_SPACING;
const SIDE_PADDING = (SCREEN_WIDTH - ITEM_WIDTH) / 2;

type CarouselItem = {
  id: string;
  color: string;
};

const exampleData: CarouselItem[] = [
  { id: "1", color: "tomato" },
  { id: "2", color: "orange" },
  { id: "3", color: "skyblue" },
  { id: "4", color: "limegreen" },
  { id: "5", color: "violet" },
  { id: "6", color: "gold" },
];

interface AnimatedCarouselItemProps {
  item: CarouselItem;
  index: number;
  scrollX: SharedValue<number>;
}

const AnimatedCarouselItem: React.FC<AnimatedCarouselItemProps> = ({
  item,
  index,
  scrollX,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [1, 1.8, 1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.item,
        animatedStyle,
        { backgroundColor: item.color },
      ]}
    >
      <Text style={styles.text}>{item.id}</Text>
    </Animated.View>
  );
};

export default function AnimatedCarousel() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black" }}
      edges={["top", "bottom"]}
    >
      <View style={styles.container}>
        <View style={{ width: "100%", height: 400 }}>
          <Animated.FlatList
            data={exampleData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            snapToInterval={ITEM_WIDTH}
            snapToAlignment="center"
            decelerationRate="fast"
            bounces={false}
            contentContainerStyle={{
              paddingHorizontal: SIDE_PADDING,
            }}
            renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
                <AnimatedCarouselItem
                  item={item}
                  index={index}
                  scrollX={scrollX}
                />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});