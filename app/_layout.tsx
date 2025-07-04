import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false,animation:'slide_from_left',animationDuration:600 }} />
        <Stack.Screen name="opposite/circles" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="pulse/pulse" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="fragment/balls" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="fadeText/fadeText" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="paws/animalPaws" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="fallingBalls/fallingBalls" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="floatBoat/floatBoat" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="bgAnimate/bgAnimate" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
        <Stack.Screen name="shining/shining" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600 }}  />
    </Stack>
  )
}
