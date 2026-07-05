import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
  scrollTo,
  runOnUI,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ITEM_SIZE = 140;
const GAP = 30;
const ITEM_WIDTH = ITEM_SIZE + GAP;

const SIDE_PADDING = (SCREEN_WIDTH - ITEM_SIZE) / 2;

const boxData=[
  { id: "1", color: "tomato" },
  { id: "2", color: "orange" },
  { id: "3", color: "skyblue" },
  { id: "4", color: "limegreen" },
  { id: "5", color: "violet" },
  { id: "6", color: "gold" },
  { id: "7", color: "violet" },
  { id: "8", color: "gold" }
]
type CarouselItem = {
  id: string;
  color: string;
};
interface AnimatedCarouselItemProps {
  item: CarouselItem;
  index: number;
  scrollX: any;
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
      [1, 1.25, 1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
       <Animated.View style={[styles.card,animatedStyle,{backgroundColor:item.color}]}>
              <Text style={styles.text}>{item.id}</Text>
           
    </Animated.View>
  );
};

export default function Carousel() {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();

  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

 const snapToClosest = () => {
  const index = Math.round(scrollX.value / ITEM_WIDTH);
  const targetOffset = index * ITEM_WIDTH + GAP / 2;

  if (Math.abs(scrollX.value - targetOffset) < 1) {
    return;
  }
  runOnUI(() => {
    scrollTo(scrollViewRef, targetOffset, 0, true);
  })();
};

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        onMomentumScrollEnd={snapToClosest}
        contentContainerStyle={{
          paddingHorizontal: SIDE_PADDING,
          alignItems: "center",
        }}
      >
        {boxData.map((item,index) => (
          <View key={item.id} style={styles.itemContainer}>
            <AnimatedCarouselItem
            index={index}
            key={item.id}
            scrollX={scrollX}
            item={item}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },

  itemContainer: {
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});