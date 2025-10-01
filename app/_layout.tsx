import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pages/welcome" />
        <Stack.Screen name="pages/mainPage" />
        <Stack.Screen name="pages/categoryScreen" />
        <Stack.Screen name="pages/recipeDetail" />
      </Stack>
    </GestureHandlerRootView>
  );
}
