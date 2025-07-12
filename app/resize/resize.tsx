import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from 'react-native-reanimated';

const ITEM_WIDTH : number = 100 + 60  // ancho del ítem + espacio horizontal (margin)

type CarouselItem = {
  id: string;
  color: string;
}

const exampleData : CarouselItem[] = [
  { id: '1', color: 'tomato' },
  { id: '2', color: 'orange' },
  { id: '3', color: 'skyblue' },
  { id: '4', color: 'limegreen' },
  { id: '5', color: 'violet' },
  { id: '6', color: 'gold' },
]
interface AnimatedCarouselItemProps {
  item: CarouselItem
  index: number
  scrollX: SharedValue<number>
}
const AnimatedCarouselItem : React.FC<AnimatedCarouselItemProps> = ({ item, index, scrollX }) => {
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
    <Animated.View style={[styles.item, animatedStyle, { backgroundColor: item.color }]}>
      <Text style={styles.text}>{item.id}</Text>
    </Animated.View>
  );
};

const AnimatedCarousel = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 400 }}>
        <Animated.FlatList
          data={exampleData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          bounces={false}
          renderItem={({ item, index }) => (
            <AnimatedCarouselItem item={item} index={index} scrollX={scrollX} />
          )}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff8e',
  },
  contentContainer: {
    paddingHorizontal: '27%',
    alignItems: 'center',
    columnGap: 10,
  },
  item: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AnimatedCarousel;
